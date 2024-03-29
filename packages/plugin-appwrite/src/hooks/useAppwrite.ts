import { useContext, useEffect, useState } from 'react'

import { LocalStore, PluginContext, useConfig, useLocalStore } from '@exothermic/core'
import { Client as Appwrite, Account, Databases, ID, Models } from 'appwrite'

import { AppwritePluginOptions } from '../types'
import unique from '~/utils/unique'

type ListDocuments = {
  collection: string
  queries?: string[]
}

class AppwriteSDK {
  private database: string

  private account: Account

  private databases: Databases

  private fallback?: LocalStore

  private collections: Record<string, string>

  constructor({
    endpoint,
    project,
    database,
    fallback,
    collections,
  }: {
    endpoint: string
    project: string
    database: string
    fallback?: LocalStore
    collections: Record<string, string>
  }) {
    const client = new Appwrite()
    client.setEndpoint(endpoint).setProject(project)
    this.database = database
    this.fallback = fallback
    this.collections = collections

    this.account = new Account(client)
    this.databases = new Databases(client)
  }

  getAccount() {
    return this.account.get()
  }

  createAccount(email: string, password: string, name?: string) {
    return this.account.create(email, email, password, name)
  }

  updateEmail(email: string, password: string) {
    return this.account.updateEmail(email, password)
  }

  updateName(name: string) {
    return this.account.updateName(name)
  }

  updatePassword(password: string, oldPassword: string) {
    return this.account.updatePassword(password, oldPassword)
  }

  updatePrefs(prefs: object) {
    return this.account.updatePrefs(prefs)
  }

  updatePhone(phone: string, password: string) {
    return this.account.updatePhone(phone, password)
  }

  async updateAccount(account: Models.Account<Models.Preferences>, data: any) {
    const parts: Promise<Models.Account<Models.Preferences>>[] = []

    if (data.email && data.password && account.email !== data.email) {
      parts.push(this.updateEmail(data.email as string, data.password as string))
    }
    if (data.name && account.name !== data.name) {
      parts.push(this.updateName(data.name as string))
    }
    if (data.newPassword && data.password) {
      parts.push(this.updatePassword(data.newPassword as string, data.password as string))
    }
    if (data.phone && data.password && account.phone !== data.phone) {
      parts.push(this.updatePhone(data.phone as string, data.password as string))
    }

    return Promise.all(parts)
      .then((val) => val[0])
      .catch(() => {
        throw new Error('error updating account')
      })
  }

  createSession(email: string, password: string) {
    return this.account.createEmailSession(email, password)
  }

  createMagicURLSession(userId: string) {
    return this.account.createMagicURLSession(userId, userId)
  }

  deleteSession(sessionId: string) {
    return this.account.deleteSession(sessionId)
  }

  private fallbackListDocuments(
    collectionId: string,
  ): Promise<Models.DocumentList<Models.Document>> | undefined {
    return this.fallback?.getAll({ collectionId }).then((results) => ({
      total: results?.length ?? 0,
      documents:
        results?.map((doc) => ({
          $id: doc.id,
          $collectionId: collectionId,
          $databaseId: this.database,
          $createdAt: doc.createdAt ?? '',
          $updatedAt: doc.updatedAt ?? '',
          $permissions: doc.permissions,
          ...doc.data,
        })) ?? [],
    }))
  }

  async listDocuments({
    collection,
    queries,
  }: ListDocuments): Promise<Models.DocumentList<Models.Document> & { hasLocal?: boolean }> {
    const collectionId = this.collections[collection]

    try {
      const docs = await this.databases.listDocuments(this.database, collectionId, queries)
      const localDocs = await this.fallbackListDocuments(collectionId)

      if (localDocs != null) {
        return {
          total: docs.total + localDocs.total,
          documents: [...docs.documents, ...localDocs.documents],
          hasLocal: true,
        }
      }

      return docs
    } catch {
      return {
        total: 0,
        documents: [],
      }
    }
  }

  async getDocument(
    collection: string,
    documentId: string,
  ): Promise<(Models.Document & { isLocal?: boolean }) | null> {
    const collectionId = this.collections[collection]

    try {
      return this.databases.getDocument(this.database, collectionId, documentId)
    } catch {
      const doc = await this.fallback?.get<Models.Document>(documentId)

      if (doc) {
        return {
          isLocal: true,
          $id: doc.id,
          $collectionId: collectionId,
          $databaseId: this.database,
          $createdAt: doc.createdAt ?? '',
          $updatedAt: doc.updatedAt ?? '',
          $permissions: doc.permissions,
          ...doc.data,
        }
      }
      return null
    }
  }

  async updateDocument(
    collection: string,
    documentId: string,
    data: object,
    permissions?: string[],
  ) {
    const collectionId = this.collections[collection]

    try {
      return this.databases.updateDocument(
        this.database,
        collectionId,
        documentId,
        data,
        permissions,
      )
    } catch {
      const docId = await this.fallback?.put(
        {
          collectionId,
          data,
          permissions,
          updatedAt: Date.now(),
        },
        documentId,
      )
      return { $id: docId?.toString() }
    }
  }

  async createDocument(collection: string, data: object, permissions?: string[]) {
    const collectionId = this.collections[collection]
    const id = ID.unique()

    try {
      return this.databases.createDocument(this.database, collectionId, id, data, permissions)
    } catch {
      const docId = await this.fallback?.add(
        {
          collectionId,
          data,
          permissions,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        id === 'unique()' ? unique() : id,
      )
      return { $id: docId?.toString(), $updatedAt: null }
    }
  }

  async deleteDocument(collection: string, documentId: string) {
    const collectionId = this.collections[collection]
    try {
      return await this.databases.deleteDocument(this.database, collectionId, documentId)
    } catch {
      return this.fallback?.del(documentId)
    }
  }

  async syncDocument(doc: Models.Document) {
    const exists = await this.databases.getDocument(this.database, doc.$collectionId, doc.$id)

    if (exists && exists.$updatedAt < doc.$updatedAt) {
      return this.databases
        .updateDocument(
          this.database,
          doc.$collectionId,
          doc.$id,
          doc.data as object,
          doc.$permissions,
        )
        .then(() => this.fallback?.del(doc.$id))
    }

    return this.databases
      .createDocument(
        this.database,
        doc.$collectionId,
        doc.$id,
        doc.data as object,
        doc.$permissions,
      )
      .then(() => this.fallback?.del(doc.$id))
  }

  async syncDocumentById(documentId: string) {
    const doc = await this.fallback?.get<Models.Document>(documentId)

    if (doc) {
      await this.syncDocument(doc)
    }
  }

  async syncAll(collection: string) {
    const collectionId = this.collections[collection]
    const localDocs = await this.fallbackListDocuments(collectionId)

    if (localDocs) {
      await Promise.allSettled(localDocs.documents.map(async (doc) => this.syncDocument(doc)))
    }
  }
}

export const useAppwrite = (): AppwriteSDK => {
  const config = useConfig()
  const { dispatch, state: pluginState } = useContext(PluginContext)
  const [appwrite, setAppwrite] = useState<AppwriteSDK>(pluginState.plugins.appwrite as AppwriteSDK)
  const fallback = useLocalStore({ storeName: 'appwrite' })

  useEffect(() => {
    if (pluginState.plugins.appwrite) {
      return
    }

    const plugin = config.plugins?.find((plug) => plug.resolve === '@exothermic/plugin-appwrite')
    const { project, endpoint, database, collections } = (plugin?.options ?? {
      project: '',
      endpoint: '',
      database: '',
      collections: {},
    }) as AppwritePluginOptions
    const aw = new AppwriteSDK({ endpoint, project, database, collections, fallback })

    if (dispatch) {
      dispatch({ type: 'ADD_PLUGIN', plugin: { appwrite: aw } })
    }
    setAppwrite(aw)
  }, [config.plugins, dispatch, fallback, pluginState.plugins.appwrite])

  return appwrite
}

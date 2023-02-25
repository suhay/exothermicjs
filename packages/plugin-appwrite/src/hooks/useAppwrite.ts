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

  listDocuments({
    collection,
    queries,
  }: ListDocuments): Promise<Models.DocumentList<Models.Document>> {
    const collectionId = this.collections[collection]
    return this.databases
      .listDocuments(this.database, collectionId, queries)
      .then(async (docs) => {
        const localDocs = await this.fallbackListDocuments(collectionId)

        if (localDocs != null) {
          return {
            total: docs.total + localDocs.total,
            documents: [...docs.documents, ...localDocs.documents],
          }
        }

        return docs
      })
      .catch(() => ({
        total: 0,
        documents: [],
      }))
  }

  getDocument(collection: string, documentId: string): Promise<Models.Document> {
    const collectionId = this.collections[collection]
    return this.databases.getDocument(this.database, collectionId, documentId).catch(() =>
      this.fallback?.get<Models.Document>(documentId)?.then((doc) => ({
        $id: doc.id,
        $collectionId: collectionId,
        $databaseId: this.database,
        $createdAt: doc.createdAt ?? '',
        $updatedAt: doc.updatedAt ?? '',
        $permissions: doc.permissions,
        ...doc.data,
      })),
    )
  }

  updateDocument(collection: string, documentId: string, data: object, permissions?: string[]) {
    const collectionId = this.collections[collection]
    return this.databases
      .updateDocument(this.database, collectionId, documentId, data, permissions)
      .catch(() =>
        this.fallback
          ?.put(
            {
              collectionId,
              data,
              permissions,
              updatedAt: Date.now(),
            },
            documentId,
          )
          ?.then((docId) => ({ $id: docId?.toString() })),
      )
  }

  createDocument(collection: string, data: object, permissions?: string[]) {
    const collectionId = this.collections[collection]
    const id = ID.unique()

    return this.databases
      .createDocument(this.database, collectionId, id, data, permissions)
      .catch(() =>
        this.fallback
          ?.add(
            {
              collectionId,
              data,
              permissions,
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            id === 'unique()' ? unique() : id,
          )
          ?.then((docId) => ({ $id: docId?.toString() })),
      )
  }

  deleteDocument(collection: string, documentId: string) {
    const collectionId = this.collections[collection]
    return this.databases
      .deleteDocument(this.database, collectionId, documentId)
      .catch(() => this.fallback?.del(documentId))
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

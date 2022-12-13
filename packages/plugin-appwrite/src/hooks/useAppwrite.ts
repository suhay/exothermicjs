import { useContext, useEffect, useState } from 'react'

import { PluginContext, useConfig } from '@exothermic/core'
import { Client as Appwrite, Account, Databases, ID } from 'appwrite'

type ListDocuments = {
  collectionId: string
  queries?: string[]
}

class AppwriteSDK {
  private database: string

  private account: Account

  private databases: Databases

  constructor(endpoint: string, project: string, database: string) {
    const client = new Appwrite()
    client.setEndpoint(endpoint).setProject(project)
    this.database = database

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

  listDocuments({ collectionId, queries }: ListDocuments) {
    return this.databases.listDocuments(this.database, collectionId, queries)
  }

  getDocument(collectionId: string, documentId: string) {
    return this.databases.getDocument(this.database, collectionId, documentId)
  }

  updateDocument(collectionId: string, documentId: string, data: object, permissions?: string[]) {
    return this.databases.updateDocument(this.database, collectionId, documentId, data, permissions)
  }

  createDocument(collectionId: string, data: object, permissions?: string[]) {
    return this.databases.createDocument(
      this.database,
      collectionId,
      ID.unique(),
      data,
      permissions,
    )
  }

  deleteDocument(collectionId: string, documentId: string) {
    return this.databases.deleteDocument(this.database, collectionId, documentId)
  }
}

export const useAppwrite = (): AppwriteSDK => {
  const config = useConfig()
  const { dispatch, state: pluginState } = useContext(PluginContext)
  const [appwrite, setAppwrite] = useState<AppwriteSDK>(pluginState.plugins.appwrite as AppwriteSDK)

  useEffect(() => {
    if (!pluginState.plugins.appwrite) {
      const plugin = config.plugins?.find((plug) => plug.resolve === '@exothermic/plugin-appwrite')
      const { project, endpoint, database } = plugin?.options ?? {}
      const aw = new AppwriteSDK(endpoint, project, database)

      if (dispatch) {
        dispatch({ type: 'ADD_PLUGIN', plugin: { appwrite: aw } })
      }
      setAppwrite(aw)
    }
  }, [config.plugins, dispatch, pluginState.plugins.appwrite])

  return appwrite
}

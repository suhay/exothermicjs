import { PluginContext } from '@exothermic/core'
import { Appwrite, Models } from 'appwrite'
import { useContext, useState } from 'react'

type ListDocuments = {
  collectionId: string
  queries?: string[]
  limit?: number
  offset?: number
  cursor?: string
  cursorDirection?: string
  orderAttributes?: string[]
  orderTypes?: string[]
}

type AppwriteApiHook = {
  getAccount: () => Promise<Models.User<Models.Preferences>> | undefined
  createSession: (email: string, password: string) => Promise<Models.Session> | undefined
  deleteSession: (sessionId: string) => Promise<{}> | undefined
  createAccount: (
    userId: string,
    email: string,
    password: string,
    name?: string,
  ) => Promise<Models.User<Models.Preferences>> | undefined
  listDocuments: ({
    collectionId,
    queries,
    limit,
    offset,
    cursor,
    cursorDirection,
    orderAttributes,
    orderTypes,
  }: ListDocuments) => Promise<Models.DocumentList<Models.Document>> | undefined
  getDocument: (collectionId: string, documentId: string) => Promise<Models.Document> | undefined
  updateDocument: (
    collectionId: string,
    documentId: string,
    data: object,
    read?: string[],
    write?: string[],
  ) => Promise<Models.Document> | undefined
  createDocument: (collectionId: string, data: object) => Promise<Models.Document> | undefined
  deleteDocument: (collectionId: string, documentId: string) => Promise<{}> | undefined
}

export const useAppwrite = (): AppwriteApiHook => {
  const { state: pluginState } = useContext(PluginContext)
  const appwrite: Appwrite = pluginState.plugins.appwrite

  const [loading, setLoading] = useState(false)

  const getAccount = () => {
    if (!loading) {
      setLoading(true)
      return appwrite.account.get().finally(() => setLoading(false))
    }
  }

  const createSession = (email: string, password: string) => {
    if (!loading) {
      setLoading(true)
      return appwrite.account.createSession(email, password).finally(() => setLoading(false))
    }
  }

  const deleteSession = (sessionId: string) => {
    if (!loading) {
      setLoading(true)
      return appwrite.account.deleteSession(sessionId).finally(() => setLoading(false))
    }
  }

  const createAccount = (userId: string, email: string, password: string, name?: string) => {
    if (!loading) {
      setLoading(true)
      return appwrite.account.create(userId, email, password, name).finally(() => setLoading(false))
    }
  }

  const listDocuments = ({
    collectionId,
    queries,
    limit,
    offset,
    cursor,
    cursorDirection,
    orderAttributes,
    orderTypes,
  }: ListDocuments) => {
    if (!loading) {
      setLoading(true)
      return appwrite.database
        .listDocuments(
          collectionId,
          queries,
          limit,
          offset,
          cursor,
          cursorDirection,
          orderAttributes,
          orderTypes,
        )
        .finally(() => setLoading(false))
    }
  }

  const getDocument = (collectionId: string, documentId: string) => {
    if (!loading) {
      setLoading(true)
      return appwrite.database
        .getDocument(collectionId, documentId)
        .finally(() => setLoading(false))
    }
  }

  const updateDocument = (
    collectionId: string,
    documentId: string,
    data: object,
    read?: string[],
    write?: string[],
  ) => {
    if (!loading) {
      setLoading(true)
      return appwrite.database
        .updateDocument(collectionId, documentId, data, read, write)
        .finally(() => setLoading(false))
    }
  }

  const createDocument = (collectionId: string, data: object) => {
    if (!loading) {
      setLoading(true)
      return appwrite.database
        .createDocument(collectionId, 'unique()', data)
        .finally(() => setLoading(false))
    }
  }

  const deleteDocument = (collectionId: string, documentId: string) => {
    if (!loading) {
      setLoading(true)
      return appwrite.database
        .deleteDocument(collectionId, documentId)
        .finally(() => setLoading(false))
    }
  }

  return {
    getAccount,
    listDocuments,
    createSession,
    deleteSession,
    createAccount,
    getDocument,
    updateDocument,
    createDocument,
    deleteDocument,
  }
}

import { PluginContext, useConfig } from '@exothermic/core'
import { Appwrite, Models } from 'appwrite'
import { useCallback, useContext, useEffect, useState } from 'react'

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
  deleteSession: (sessionId: string) => Promise<void> | undefined
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
  }: ListDocuments) => Promise<Models.DocumentList<Models.Document>>
  getDocument: (collectionId: string, documentId: string) => Promise<Models.Document> | undefined
  updateDocument: (
    collectionId: string,
    documentId: string,
    data: object,
    read?: string[],
    write?: string[],
  ) => Promise<Models.Document> | undefined
  createDocument: (collectionId: string, data: object) => Promise<Models.Document> | undefined
  deleteDocument: (collectionId: string, documentId: string) => Promise<void> | undefined
}

export const useAppwrite = (): AppwriteApiHook => {
  const config = useConfig()
  const { dispatch, state: pluginState } = useContext(PluginContext)
  const [appwrite, setAppwrite] = useState<Appwrite>(pluginState.plugins.appwrite as Appwrite)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!pluginState.plugins.appwrite) {
      const plugin = config.plugins?.find((plug) => plug.resolve === '@exothermic/plugin-appwrite')
      const { project, endpoint } = plugin?.options ?? {}
      const aw = new Appwrite()
      aw.setEndpoint(endpoint).setProject(project)

      if (dispatch) {
        dispatch({ type: 'ADD_PLUGIN', plugin: { appwrite: aw } })
      }
      setAppwrite(aw)
    }
  }, [config.plugins, dispatch, pluginState.plugins.appwrite])

  const getAccount = useCallback(() => {
    if (!loading && appwrite) {
      setLoading(true)
      return appwrite.account.get().finally(() => setLoading(false))
    }
    return undefined
  }, [appwrite, loading])

  const createSession = useCallback(
    (email: string, password: string) => {
      if (!loading && appwrite) {
        setLoading(true)
        return appwrite.account.createSession(email, password).finally(() => setLoading(false))
      }
      return undefined
    },
    [appwrite, loading],
  )

  const deleteSession = useCallback(
    async (sessionId: string) => {
      if (!loading && appwrite) {
        setLoading(true)
        await appwrite.account.deleteSession(sessionId).finally(() => setLoading(false))
      }
    },
    [appwrite, loading],
  )

  const createAccount = useCallback(
    (userId: string, email: string, password: string, name?: string) => {
      if (!loading && appwrite) {
        setLoading(true)
        return appwrite.account
          .create(userId, email, password, name)
          .finally(() => setLoading(false))
      }
      return undefined
    },
    [appwrite, loading],
  )

  const listDocuments = useCallback(
    ({
      collectionId,
      queries,
      limit,
      offset,
      cursor,
      cursorDirection,
      orderAttributes,
      orderTypes,
    }: ListDocuments) => {
      if (!loading && appwrite) {
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
      return Promise.resolve({
        total: 0,
        documents: [],
      })
    },
    [appwrite, loading],
  )

  const getDocument = useCallback(
    (collectionId: string, documentId: string) => {
      if (!loading && appwrite) {
        setLoading(true)
        return appwrite.database
          .getDocument(collectionId, documentId)
          .finally(() => setLoading(false))
      }
      return undefined
    },
    [appwrite, loading],
  )

  const updateDocument = useCallback(
    (collectionId: string, documentId: string, data: object, read?: string[], write?: string[]) => {
      if (!loading && appwrite) {
        setLoading(true)
        return appwrite.database
          .updateDocument(collectionId, documentId, data, read, write)
          .finally(() => setLoading(false))
      }
      return undefined
    },
    [appwrite, loading],
  )

  const createDocument = useCallback(
    (collectionId: string, data: object) => {
      if (!loading && appwrite) {
        setLoading(true)
        return appwrite.database
          .createDocument(collectionId, 'unique()', data)
          .finally(() => setLoading(false))
      }
      return undefined
    },
    [appwrite, loading],
  )

  const deleteDocument = useCallback(
    async (collectionId: string, documentId: string) => {
      if (!loading && appwrite) {
        setLoading(true)
        await appwrite.database
          .deleteDocument(collectionId, documentId)
          .finally(() => setLoading(false))
      }
    },
    [appwrite, loading],
  )

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

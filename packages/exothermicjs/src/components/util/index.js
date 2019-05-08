export const key = (item, i = 0) => Object.keys(item)[i]

export const val = (item, i = 0) => item[Object.keys(item)[i]]

export const isBrowser = () => typeof window !== `undefined` && window.document !== undefined

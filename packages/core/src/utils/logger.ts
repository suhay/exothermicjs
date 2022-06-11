export const debug = (msg: string) => {
  if (window.location.search === '?debug') {
    // eslint-disable-next-line no-console
    console.log(msg)
  }
}

export const error = (err: any) => {
  // eslint-disable-next-line no-console
  console.error(err)
}

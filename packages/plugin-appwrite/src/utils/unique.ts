function uniqid(prefix = '', random = false) {
  const sec = Date.now() * 1000 + Math.random() * 1000
  const id = sec.toString(16).replace(/\./g, '').padEnd(14, '0')
  return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}` : ''}`
}

const getRandomBytes = (() => {
  // @ts-expect-error Property 'msCrypto' does not exist on type 'Window & typeof globalThis'. Did you mean 'Crypto'?
  // eslint-disable-next-line no-restricted-globals
  const crypto = self.crypto || self.msCrypto
  const QUOTA = 65536

  return (n: number) => {
    const a = new Uint8Array(n)
    for (let i = 0; i < n; i += QUOTA) {
      crypto.getRandomValues(a.subarray(i, i + Math.min(n - i, QUOTA)))
    }
    return a
  }
})()

function toHexString(byteArray: Iterable<unknown> | ArrayLike<unknown>) {
  // @ts-expect-error 'byte' is of type 'unknown'
  // eslint-disable-next-line no-bitwise
  return Array.from(byteArray, (byte) => `0${(byte & 0xff).toString(16)}`.slice(-2)).join('')
}

function unique(padding = 7): string {
  let uni = uniqid()

  if (padding > 0) {
    const bytes = getRandomBytes(Math.ceil(padding / 2)) // one byte expands to two chars
    uni += toHexString(bytes).substring(0, padding)
  }

  return uni
}

export default unique

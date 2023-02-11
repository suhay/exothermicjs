const wait = (interval: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, interval)
  })

type Props<TArgs, T> = {
  fn: (args: TArgs) => Promise<T>
  retriesLeft?: number
  interval?: number
  onOutOfRetries?: () => void
}

export const retryPromise = <TArgs, T>(
  { fn, retriesLeft = 5, interval = 500, onOutOfRetries = () => null }: Props<TArgs, T>,
  args: TArgs,
): Promise<T> =>
  fn(args).catch(() => {
    if (retriesLeft === 0) {
      onOutOfRetries()
      throw new Error('Out of retries')
    }
    return wait(interval).then(() => {
      retriesLeft -= 1
      return retryPromise<TArgs, T>({ fn, retriesLeft, interval, onOutOfRetries }, args)
    })
  })

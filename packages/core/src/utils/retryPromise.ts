const wait = (interval: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, interval)
  })

type Props<TArgs, T> = {
  fn: (args: TArgs) => Promise<T>
  retriesLeft?: number
  interval?: number
}

export const retryPromise = <TArgs, T>(
  { fn, retriesLeft = 5, interval = 500 }: Props<TArgs, T>,
  args: TArgs,
): Promise<T> =>
  fn(args).catch(() => {
    if (retriesLeft === 0) {
      throw new Error('error loading plugin')
    }
    return wait(interval).then(() => {
      retriesLeft -= 1
      return retryPromise<TArgs, T>({ fn, retriesLeft, interval }, args)
    })
  })

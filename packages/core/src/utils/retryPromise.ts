const wait = (interval: number) => new Promise<void>((resolve) => setTimeout(resolve, interval))

type Props = {
  fn: (args: any) => Promise<any>
  retriesLeft?: number
  interval?: number
}

export const retryPromise = <T>(
  { fn, retriesLeft = 5, interval = 500 }: Props,
  args: any,
): Promise<T> =>
  fn(args).catch(() => {
    if (retriesLeft === 0) {
      throw new Error('error loading plugin')
    }
    return wait(interval).then(() => {
      retriesLeft -= 1
      return retryPromise({ fn, retriesLeft, interval }, args)
    })
  })

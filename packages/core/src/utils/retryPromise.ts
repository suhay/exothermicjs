const wait = (interval: number) => new Promise<void>((resolve) => setTimeout(resolve, interval))

type Props = {
  fn: (args: any) => Promise<any>,
  retriesLeft?: number,
  interval?: number,
}

export const retryPromise = ({
  fn,
  retriesLeft = 5,
  interval = 500,
}: Props, args: any) => fn(args)
  .catch((error) => {
    if (retriesLeft === 0) {
      throw new Error(error)
    }
    return wait(interval)
      .then(() => {
        retriesLeft -= 1
        return retryPromise({ fn, retriesLeft, interval }, args)
      })
  })

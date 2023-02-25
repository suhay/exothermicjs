export type LoadingProps = {
  type?: 'global-loading' | 'shimmer'
}

export function Loading({ type = 'global-loading' }: LoadingProps) {
  return (
    <div className={type}>
      <span className='loading'>Loading...</span>
      <div className='spinner'>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

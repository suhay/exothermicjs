export const Loading = ({ type = 'global-loading' }: { type?: 'global-loading' | 'shimmer' }) => (
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

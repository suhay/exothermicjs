import { useExothermic } from '../../hooks'
import { Content } from './content'
// import { Spinner } from './spinner'

type Props = {
  path: string
}

export const Get = ({ path }: Props) => {
  const { data, status } = useExothermic(path)

  if (status === 'LOADING') {
    return <>Loading...</>
  }

  if (!data) {
    return <></>
  }

  return (
    <div className="get-loaded">
      <Content content={data.content} />
      {data.items}
    </div>
  )
}

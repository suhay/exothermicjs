import { useExothermic } from '../../hooks/useExothermic'
import { PageFragment } from './fragment'
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
    <PageFragment {...data} class="get-loaded" />
  )
}

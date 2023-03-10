import { useState, useEffect, ReactElement } from 'react'

import { useLoader, useConfig, Content, Loading } from '@exothermic/core'

import { BlogManifest } from '../types'

export type Props = {
  title: string
  class?: string
  options?: string[]
  items?: ReactElement[]
}

export function BlogRoll({ title, class: classProps, items = [] }: Props) {
  const config = useConfig()
  const [manifestPath, setManifestPath] = useState<string>()
  const { data, status } = useLoader(manifestPath)
  const [manifest, setManifest] = useState<BlogManifest>({})
  const [dates, setDates] = useState<string[]>()

  useEffect(() => {
    if (config) {
      const plugin = config.plugins?.find((plug) => plug.resolve === '@exothermic/plugin-blog')
      setManifestPath(`${plugin?.options?.path ?? ''}/_manifest.json`)
    }
  }, [config])

  useEffect(() => {
    if (data) {
      const man = JSON.parse(data) as BlogManifest
      setManifest(man)
      setDates(Object.keys(man))
    }
  }, [data])

  if (status === 'LOADING') {
    return <Loading />
  }

  return (
    <section className={classProps ?? ''}>
      <Content content={title} />
      <ul>
        {dates
          ?.sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
          .map((date) => (
            <li key={manifest[date].filename}>
              {items?.map((item, i) => (
                <item.type
                  {...item.props}
                  data={{ ...manifest[date], date }}
                  key={`${item.type.toString()}-${i}`}
                />
              ))}
            </li>
          ))}
      </ul>
    </section>
  )
}

import {
  useLoader, useConfig, Link, Content, useState, useEffect,
} from '@exothermic/core'

type Props = {
  title: string
}

export const BlogRoll = ({ title }: Props) => {
  const config = useConfig()
  const [manifestPath, setManifestPath] = useState<string>()
  const { data, status } = useLoader(manifestPath)
  const [pluginPath, setPluginPath] = useState<string>()

  useEffect(() => {
    if (config) {
      const plugin = config.plugins.find((plug) => plug.resolve === '@exothermic/plugin-blog')
      setManifestPath(`${plugin.options.path}/_manifest.json`)
      setPluginPath(plugin.options.path)
    }
  }, [config])

  if (status === 'LOADING') {
    return <>Loading...</>
  }

  const manifest = JSON.parse(data)
  const dates = Object.keys(manifest)

  return (
    <section>
      <Content content={title} />
      <ul>
        {dates.map((date) => (
          <li key={manifest[date].filename}>
            <Link to={`/${pluginPath}/${manifest[date].filename}`}>{manifest[date].title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

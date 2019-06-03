const presets = (api) => {
  const isTest = api.env() === `development`
  if (isTest) {
    return [
      `@babel/preset-react`,
      [
        `@babel/preset-env`,
        {
          targets: {
            node: `current`,
          },
        },
      ],
    ]
  }
  return [
    `@babel/preset-react`,
    [
      `@babel/preset-env`,
      {
        modules: false,
      },
    ],
  ]
}

const plugins = (api) => {
  const isTest = api.env() === `development`
  const defaultPlugins = [
    `@babel/plugin-transform-react-jsx`,
    `@babel/plugin-transform-react-jsx-source`,
    `@babel/plugin-transform-react-jsx-self`,
    `@babel/plugin-proposal-object-rest-spread`,
    `@babel/plugin-proposal-class-properties`,
    `@babel/plugin-syntax-dynamic-import`,
  ]

  if (isTest) {
    return defaultPlugins
  }

  return defaultPlugins
}

module.exports = (api) => {
  const pres = presets(api)
  const plugs = plugins(api)
  return {
    presets: pres,
    plugins: plugs,
  }
}

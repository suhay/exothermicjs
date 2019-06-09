const path = require(`path`)
const babelConfig = require(`../../babel.config.js`)

module.exports = (api) => {
  console.log(api)
  return {
    ...babelConfig(api),
    plugins: [
      ...babelConfig(api).plugins,
      [
        `module-resolver`,
        {
          root: path.join(__dirname, `src`),
          alias: {
            Root: path.join(__dirname, `.`),
            Components: path.resolve(__dirname, `src/components/`),
          },
        },
      ],
    ],
  }
}

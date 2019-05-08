const path = require(`path`)
const babelConfig = require(`../../babel.config.js`)

module.exports = {
  ...babelConfig,
  plugins: [
    ...babelConfig.plugins,
    [
      `module-resolver`,
      {
        root: path.join(__dirname, `src`),
        alias: {
          Root: path.join(__dirname, `.`),
          Components: path.resolve(__dirname, `src/components/`),
          Modules: path.resolve(__dirname, `src/components/`),
        },
      },
    ],
  ],
}

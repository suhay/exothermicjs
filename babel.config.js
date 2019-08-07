module.exports = (api) => {
  const isTest = api.env(`test`)
  return {
    babelrcRoots: [
      `.`,
      `./packages/*`,
    ],
    presets: [
      [
        `@babel/env`,
        {
          modules: false,
          useBuiltIns: `entry`,
          corejs: `core-js@3`,
          targets: {
            browsers: [`> 1%`],
          },
        },
      ],
      `@babel/react`,
    ],
    plugins: [
      `@babel/syntax-dynamic-import`,
      `@babel/plugin-proposal-object-rest-spread`,
      `css-modules-transform`,
    ],
    env: {
      test: {
        presets: [
          [
            `@babel/preset-env`,
            {
              targets: {
                node: `current`,
              },
            },
          ],
          `@babel/react`,
        ],
        plugins: [
          `@babel/syntax-dynamic-import`,
          `@babel/plugin-proposal-object-rest-spread`,
          `css-modules-transform`,
        ],
      },
    },
  }
}

const path = require('path')
const { merge } = require('webpack-merge')

const common = require('../../webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'exothermic-core': './src/index.tsx',
  },
  output: {
    library: {
      name: '@exothermic/core',
      type: 'umd',
    },
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: require.resolve('react'),
        loader: 'expose-loader',
        options: {
          exposes: {
            globalName: 'React',
            override: true,
          },
        },
      },
    ],
  },
})

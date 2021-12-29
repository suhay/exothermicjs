const path = require('path')
const { merge } = require('webpack-merge')

const common = require('../../webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    'exothermic-core': './src/index.tsx',
  },
  devServer: {
    contentBase: path.join(__dirname, '../../public'),
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
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

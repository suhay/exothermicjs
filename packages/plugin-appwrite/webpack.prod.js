const path = require('path')
const { merge } = require('webpack-merge')

const common = require('../../webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'plugin-appwrite': './src/index.tsx',
  },
  output: {
    library: {
      name: '@exothermic/plugin-appwrite',
      type: 'umd',
    },
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    '@exothermic/core': '@exothermic/core',
    react: 'React',
  },
});

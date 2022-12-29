const path = require('path')

module.exports = {
  entry: {
    'plugin-appwrite': './src/index.ts',
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
    'react-router-dom': 'react-router-dom',
    'js-yaml': 'js-yaml'
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    },
  }
}

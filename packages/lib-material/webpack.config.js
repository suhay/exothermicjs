const path = require('path')

module.exports = {
  entry: {
    'lib-material': './src/index.ts',
  },
  output: {
    library: {
      name: '@exothermic/lib-material',
      type: 'umd',
    },
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    '@exothermic/core': '@exothermic/core',
    react: 'React',
    'js-yaml': 'js-yaml'
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    },
  }
}

const path = require('path')

module.exports = {
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
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    },
  }
}

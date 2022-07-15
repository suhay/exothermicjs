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
      {
        test: require.resolve('js-yaml'),
        loader: 'expose-loader',
        options: {
          exposes: [
            'js-yaml.Type|Type'
          ]
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

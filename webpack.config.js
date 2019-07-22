module.exports = options => (
  {
    output: {
      filename: `bundle.js`,
    },
    node: {
      fs: `empty`,
    },
    devServer: {
      lazy: true,
      filename: `bundle.js`,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: `babel-loader`,
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [`style-loader`, `css-loader`],
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [`style-loader`, `css-loader`],
        },
      ],
    },
  }
)

const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

const presets = () => {
  if (isTest) {
    return ['@babel/preset-react', '@babel/preset-env'];
  }
  return [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ];
};

const plugins = () => {
  const defaultPlugins = [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-react-jsx-source",
    "@babel/plugin-transform-react-jsx-self",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
  ];

  if (isProduction) {
    return defaultPlugins;
  }

  if (isTest) {
    return defaultPlugins;
  }

  return defaultPlugins;
};

module.exports = {
  presets: presets(),
  plugins: plugins(),
};

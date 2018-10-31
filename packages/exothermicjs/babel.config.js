const path = require('path');
const babelConfig = require('../../babel.config.js');

module.exports = {
  ...babelConfig,
  plugins: [
    ...babelConfig.plugins,
    [
      'module-resolver',
      {
        Root: path.join(__dirname, '.'),
        alias: {
          Components: path.resolve(__dirname, 'src/components/'),
          Modules: path.resolve(__dirname, 'src/components/'),
        },
      },
    ],
  ],
};

module.exports = (server) => ({
  presets: [
    [ 'env', {
      targets: server ? { node: 4 } : { browsers: ['> 5%', 'last 2 versions', 'ie 11'] },
      modules: false,
    } ],

    'react',
  ],
});
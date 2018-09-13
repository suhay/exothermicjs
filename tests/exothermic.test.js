var Exothermic = require("../dist/exothermic")
var path = require('path')

var pages =  path.resolve(__dirname, '../demo/dist/pages')

test('demo site renders', () => {
  expect(Exothermic.build('/', pages, true)).toContain('Where - End of file!!')
});

// Getter

// API
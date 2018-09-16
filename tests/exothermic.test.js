var Exothermic = require("../dist/exothermic.min")
var path = require('path')

var pages =  path.resolve(__dirname, '../demo/public/pages')

test('demo site renders', () => {
  expect(Exothermic.build('/', pages)).toContain('Where - End of file!!')
});

// Getter

// API
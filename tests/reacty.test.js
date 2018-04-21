var Reacty = require("../dist/reacty");
var path = require('path');

var pages =  path.resolve(__dirname, '../demo/dist/pages');

test('demo site renders', () => {
  expect(Reacty.build('/', pages)).toContain('Where you can find me');
});
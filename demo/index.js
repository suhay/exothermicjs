// var Reacty = require("react-yaml-templator");
var Reacty = require("../dist/reacty");
var path = require('path');
var express = require('express');

var app = express();
var pages =  path.resolve(__dirname, './dist/pages');

app.use('./dist', express.static(path.resolve(__dirname, './dist')));

app.get('/', (req, res) => {
  res.send(Reacty.build('index', pages));
}).get('/:page', (req, res) => {
  if (req.params.page.indexOf('.') === -1) {
    res.send(Reacty.build(req.params.page, pages));
  }
}).listen(3001, () => {
  console.log('React app listening on port 3001!')
});
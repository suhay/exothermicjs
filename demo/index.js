var Reacty = require("../dist/reacty");
var path = require('path');
var express = require('express');

var app = express();
var pages =  path.resolve(__dirname, './dist/pages');

app.get('*', (req, res) => {
  if (req.url.indexOf('.') === -1) {
    res.send(Reacty.build(req.url, pages));
  } else {
    var path = req.params[0] ? req.params[0] : 'index.html';
    res.sendFile(path, {root: './dist/static'});
  }
}).listen(3001, () => {
  console.log('React app listening on port 3001!')
});
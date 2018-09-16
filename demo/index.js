var Exothermic = require("../dist/exothermic");
var path = require('path');
var express = require('express');

var app = express();
var pages =  path.resolve(__dirname, './public/pages')

app.get('/load/:load', (req, res) => {
	res.send(Exothermic.bedew(req.params.load, pages))
	res.end()
})
	
app.get('*', (req, res, next) => {
  try {
    if (req.url.indexOf('.') === -1) {
      res.send(Exothermic.build(req.url, pages));
    } 
    else {
      var path = req.params[0] ? req.params[0] : res.status(404).end()
      res.sendFile(path , { root : __dirname});
    }
  }
  catch (err) {
    next(err)
  }
})
	
app.listen(3001, () => {
  console.log('React app listening on port 3001!')
});
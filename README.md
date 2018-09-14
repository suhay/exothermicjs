# ExothermicJS - Yaml based templating for ReactJS

[![Build Status](https://travis-ci.org/suhay/exothermicjs.svg?branch=master)](https://travis-ci.org/suhay/exothermicjs)
[![NPM version](https://img.shields.io/npm/v/exothermicjs.svg)](https://www.npmjs.org/package/exothermicjs)

Create dynamic page content using YAML and Markdown without lengthy build times.

## Installation

```
npm install --save exothermicjs
```

## Basic usage

Folder structure

```
.
├── public/
│   ├── pages/
│   │   ├── index.yml
│   │   ├── base.yml
│   │   └── about.yml
│   └── static/
│        ├── css/
│        ├── js/
│        └── index.html
└── index.js
```

index.js

```js
var Exothermic = require("exothermicjs")
var path = require('path')
var express = require('express')

var app = express()
var pages =  path.resolve(__dirname, './public/pages')

app.get('/load/:load', (req, res) => {
  res.send(Exothermic.bedew(req.params.load, pages))
  res.end()
})
	
app.get('*', (req, res, next) => {
  try {
    if (req.url.indexOf('.') === -1) {
      res.send(Exothermic.build(req.url, pages))
    } 
    else {
      var path = req.params[0] ? req.params[0] : res.status(404).end()
      res.sendFile(path , { root : __dirname})
    }
  }
  catch (err) {
    next(err)
  }
})
	
app.listen(3001, () => {
  console.log('React app listening on port 3001!')
})
```

index.html

```html
<!doctype html>
<html lang="en">
  <head>{{ head }}</head>
  <body>
    <div id="__exothermic">{{ body }}</div>
    <script src="https://unpkg.com/exothermicjs/dist/browser.exothermic.min.js"></script>
  </body>
</html>

```

## Template Examples

### Navigation Bar

```yaml
- !navbar
  items:
  - 'Home': '/'
  - "Nav test": '/test'
  - "Nave test 2 - 404": '/test/more'
```

**Renders as**

```html
<nav aria-label="Top navigation">
  <ul role="menubar">
    <li role="none">
      <a href="/" role="menuitem">Home</a>
    </li>
    <li role="none">
      <a href="https://example.com" role="menuitem">
        All kinds of links
      </a>
    </li>
    <li role="none">
      <a href="#on-page-link" role="menuitem">
        Here's a link
      </a>
    </li>
  <ul>
</nav>
```

### Section

```yaml
- !section
  id: first
  title: '# First!'
  class: row
  items:
  - !col
    id: maybe-col
    content: |
      ## Here is a column
      
  - !col
    id: maybe-col-also
    content: |
      ## Here is another column

      You can add images and tables in here, too.

      from adam-p/markdown-here

      | Tables        | Are           | Cool  |
      | ------------- |:-------------:| -----:|
      | col 3 is      | right-aligned | $1600 |
```

**Renders as**

```html
<section class=”row”>
  <h1>First!</h1>
  <div class="col">
    <h2>Here is a column</h2>
  </div>
  <div class="col">
    <h2>Here is another column</h2>
    <p>You can add images and tables in here, too.</p>
    <p>from adam-p/markdown-here</p>
    <table>
      ...
    </table>
  </div>
</section>
```

### Template Referencing

```yaml
top_template:
- !get 'another-template.yml'
```

Loads the content of the referenced Yaml file. Good for content reuse, keeping file sizes smaller, and keeping similar collections of information together.

### Modules

Custom defined types that you inject with Yaml tags.

Example (not included in default modules):

```yaml
top_slideshow:
- !slideshow
  items:
  - 'https://example.com/img1.png'
  - 'https://example.com/img2.png'
  - 'https://example.com/img3.png'
```
# ReactY Templator - Yaml based templating for ReactJS

Create dynamic page content using YAML and Markdown

## Installation

```
npm install --save react-yaml-templator
```

## Basic usage

Folder structure

```
.
├── public/
│   ├── css/
│   ├── js/
│   ├── pages/
│   │   ├── index.yml
│   │   ├── base.yml
│   │   └── about.yml
│   └── index.html
└── index.js
```

index.js

```js
var Reacty = require("react-yaml-templator");
var path = require('path');
var express = require('express');

var app = express();
var pages =  path.resolve(__dirname, './public/pages');

app.get('*', (req, res) => {
  if (req.url.indexOf('.') === -1) {
    res.send(Reacty.build(req.url, pages));
  } else {
    var path = req.params[0] ? req.params[0] : 'index.html';
    res.sendFile(path, {root: './public'});
  }
}).listen(3001, () => {
  console.log('React app listening on port 3001!')
});
```

index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta name="generator" content="reacty">
  </head>
  <body>
    $body-placeholder
  </body>
</html>
```

## Template Examples

### Navigation Bar

```yaml
- !navbar
  items:
  - "Home": '/'
  - "All kinds of links": 'https://example.com'
  - "Here's a link": '#on-page-link'
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
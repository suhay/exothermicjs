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
├── css/
├── js/
├── pages/
│   ├── index.yml
│   ├── base.yml
│   └── about.yml
├── index.js
└── index.html
```

index.js

```js
import path from 'path';
import express from 'express';

import { build } from 'reacty';

const app = express();
const pages = path.resolve(__dirname, './pages');

app.get('/', (req, res) => {
  res.send(build('/', pages));
});

app.get('/:page', (req, res) => {
  res.send(build(req.params.page, pages));
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
    <script src="/static/bundle.js"></script>
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

Custom defined types that you use with a Yaml tag.

Example (not included in default modules):

```yaml
top_slideshow:
- !slideshow
  items:
  - 'https://example.com/img1.png'
  - 'https://example.com/img2.png'
  - 'https://example.com/img3.png'
```
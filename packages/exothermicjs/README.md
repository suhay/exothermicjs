# ExothermicJS - Yaml based templating for ReactJS

[![Build Status](https://travis-ci.org/suhay/exothermicjs.svg?branch=master)](https://travis-ci.org/suhay/exothermicjs)
[![NPM version](https://img.shields.io/npm/v/exothermicjs.svg)](https://www.npmjs.org/package/exothermicjs)
![Dependencies](https://david-dm.org/suhay/exothermicjs.svg)

Create dynamic page content using YAML and Markdown without lengthy build times.

## Installation

```
yarn add exothermicjs
```

## Basic usage

Folder structure

```
.
├── public/
    ├── pages/
    │   ├── fragments/
    │   │   └── about.exo
    │   ├── index.exo
    │   └── page2.exo
    └── static/
         ├── css/
         └── js/
```

Place all page templates within the ```public/pages``` directory. the ```fragments``` directory is meant to hold template files that are to be included within a page (not full pages, but fragments of one).
The package comes with a pre built ```base.exo``` and ```error.exo``` templates. Either of these can be overwritten by adding like named files to your ```pages``` directory, but they are required
for the app to work so that's why we included them by default.

Exothermic comes pre-packaged with its own Express server. To start the server, simply run:

```
npx exothermic-server
```

## .env file

It is recommended that you include a ```.env``` file within the root of your project. Here is an example of a few configurable keys:

```
PORT=3001
PUBLIC=./public
NODE_ENV=production
SSR_ONLY=false
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

Example (not included in default module):

```yaml
top_slideshow:
- !slideshow
  items:
  - 'https://example.com/img1.png'
  - 'https://example.com/img2.png'
  - 'https://example.com/img3.png'
```
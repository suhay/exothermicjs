# ExothermicJS
## YAML-based template engine for React

![https://www.npmjs.com/package/@exothermic/core](https://img.shields.io/npm/v/@exothermic/core.svg)

---

## YAML-based, what kind of engine?

I wanted to address a couple of issues I started noticing in almost every CMS I used over the years. I wrote a series of [blog articles](https://suhay.dev/blog/what-i-learned-from-15-years-of-content-management-systems-1) to outline what I wanted to achieve, but the TLDR; is that I wanted to have the benefits of using React on the front-end but I got tired of having to bootstrap *every, single* React application the same way. Writing out the same basic components, connecting it up to the same bundlers, and so on when I just wanted to put an idea on a site somewhere.

I also hated that as the project grew, so did the bundle size. With ExothermicJS, the user only downloads the core file. All the page content, images, and layouts are abstracted away.

## Installation

This is a purely client based library so all you'll need to do is add the core library to an `index.html` file, set `id="_exothermic"` to a binding `<div>`, and you're done. Plus a bit of configuration, of course.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ExothermicJS Page</title>
</head>
<body>
  <div id="__exothermic"></div>
  <script src="https://unpkg.com/@exothermic/core@2.0.0/dist/exothermic-core.js"></script>
</body>
</html>
```

## Basic usage

### Folder structure

```
└── example.com/
    ├── index.html
    ├── exothermic.config.json
    (...)
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── bootstrap.min.js
    ├── pages/
    │   ├── fragments/
    │   │   └── top-nav.exo
    │   ├── markdown/
    │   │   └── page2.md
    │   ├── about/
    │   │   ├── contact-us.exo
    │   │   └── index.exo
    │   ├── index.exo
    │   └── page2.exo
    └── templates/
         └── base.exo
```

- `index.html`: ***Required*** - Main entry point for the web browser. Loads the application.
- `exothermic.config.json`: ***Required*** - Basic configurations for the application ([see below for an example]()).
- `templates/base.exo`: ***Required*** - The base shared template used by all pages within the application (see below for an example).
- `pages/`: ***Required-ish*** - This directory is required, but the naming is whatever you'd like as long as it matches the value entered for `"pagePath"` in the `exothermic.config.json` file.
    - `index.exo`: ***Required*** - The main entry page. This file will be used when a user navigates to `https://example.com/`.
    - `fragments/`: Optional, and only for organizational purposes, a fragment within the application is any part of a page that could be reused on many pages such as top navigation or footer.
    - `markdown/`: Optional, and only for organizational purposes. It's good to keep your markdown files together, but you don't have to, nor do you have to put them here.
- `css/`: Optional, directory you can put your static CSS files, can be named whatever you want.
- `js/`: Optional, directory you can put your static JavaScript files, can be named whatever you want.

---

### `exothermic.config.json`

This is where the main configuration goes. Since we eliminated server-side rendering, you'll need to hand off a few things to the client before the app is able to load. As of v2.0.0, a basic configuration will look like this:

```json
{
  "pagePath": "/pages",
  "plugins": [
    {
      "resolve": "@exothermic/plugin-blog",
      "url": "https://unpkg.com/@exothermic/plugin-blog@2.0.0/dist/plugin-blog.js",
      "options": {
        "path": "blog"
      }
    }
  ]
}
```

- `pagePath`: ***Required*** - The relative path to the home of all your pages.
- `plugins`: Optional, but when you want to include more plugins as they become available, this is where you'll tell ExothermicJS about them and any configurations they need.
    - `resolve`: The name of the plugin.
    - `url`: Path to where the code is. This can be an external URL or a relative URL if the file is on your webserver.
    - `options`: This will usually be a collection of values the plugin needs in order to run. They can range from being just about anything. You'll need to consult the individual plugin's  README to determine what is needed.
  
---

### `base.exo`
  ```yaml
  ---
  title: '' # Title of the page

  # Meta data objects. A single key value pair will set the key as the value for 'name='
  # and the value will be used as the value for 'content='.
  # Multiple key value pairs will follow the key=value pattern
  meta:
    - httpEquiv: 'X-UA-Compatible'
      content: 'IE=edge'
    - charSet: 'UTF-8'
    - viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'

  # meta description of page, content will be used if left blank
  description: ''

  $main: []

  # Single string will load the value as the script's src.
  #  - 'https://example.com/script.js'
  #
  # Adding 'async' or 'defer' to the scripts will output the attribute
  #  - 'https://example.com/script.js'
  #    - async
  #    - defer

  scripts: []

  headScripts:
    - src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.js'
      crossorigin: 'anonymous'

  links:
    - rel: "preconnect"
      href: "https://fonts.googleapis.com"
    - rel: "preconnect"
      href: "https://fonts.gstatic.com"
      crossorigin: "crossorigin"
    - 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC&family=Yantramanav:wght@400;500;700&display=swap'
    # For complex links, the key is used as the attribute name and the value is its value
    # <link key="value" />
    - href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css' 
      integrity: "sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossOrigin: "anonymous"
      rel: "stylesheet"
    - '/css/all.min.css'
    - '/css/style@2.0.0.css'
    - rel: 'icon' 
      type: "image/svg"
      href: "/images/mono.svg"
  ```

- `title`: Page title used for SEO.
- `meta`: Creates `<meta>` tags that appear in the `<head>`.
    - A single key-value pair will set the key as the value for 'name=' and the value will be used as the value for 'content='.

      ```yaml
      meta:
        - viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      ```

      Renders as

      ```html
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      ```

    - Multiple key value pairs will follow the key=value pattern

      ```yaml
      - httpEquiv: 'X-UA-Compatible'
        content: 'IE=edge'
      ```

      Renders as

      ```html
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      ```

- `description`: SEO description of the page
- `$main`: A list of modules displayed in the order they are listed.

  ```yaml
  $main:
    - !header
      content: The greatest site ever
    - !section
      id: what-im-doing
      class: container mt-5 mb-5
      items:
        - !fragment
          class: row
          items:
            - !col
              class: col col-12 mb-5
              content: |
                ## What I'm working on<span>&#8226;</span>  
            - !col
              class: col col-12
              items:
                - !get 'fragments/projects'
  ```

- `scripts`: Creates `<script>` tags that appear at the bottom of the `<body>`.
    - A single string will load the value as the script's `src`.

      ```yaml
      scripts:
        - 'https://example.com/script.js'
      ```

        Renders as
      
      ```html
      <script src="https://example.com/script.js"></script>
      ```

    - Multiple key value pairs will follow the key=value pattern

      ```yaml
      scripts:
        - src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.js'
          crossorigin: 'anonymous'
      ```

        Renders as

      ```html
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.js"
        crossorigin="anonymous"></script>
      ```

- `headScripts`: Like `scripts`, but appear in the `<head>` instead of at the bottom of the `<body>`.
- `links`: Creates `<link>` tags that appear in the `<head>`.
    - A single string will load the value as the link's `href`.

      ```yaml
      links:
        - '/css/all.min.css'
      ```

        Renders as

      ```html
      <link href="/css/all.min.css" rel="stylesheet" type="text/css">
      ```

    - Multiple key value pairs will follow the key=value pattern

      ```yaml
      links:
        - rel: 'icon' 
          type: "image/svg"
          href: "/images/mono.svg"
      ```

        Renders as

      ```html
      <link rel="icon" type="image/svg" href="/images/mono.svg">
      ```

---

### `index.exo`

  ```yaml
  ---
  title: 'Page title!!'
  description: 'Beep boop description.'
  $top: !get 'fragments/header'
  $bottom: !get 'fragments/footer'
  $main:
    - !main
      items:
        - !section
          class: container-fluid
          id: landing-section
          content: |
            Page content!!
  ```

- All options from `base.exo`. All values changed within a page template will replace the value set on the base with the exception of `headScripts`, those will be combined.
- `$top`: A `!get` fragment that will appear above the `$main` rendering. This is used to inject content into the page.

  ```yaml
  $top: !get 'fragments/header'
  ```

- `$bottom`: A `!get` fragment that will appear below the `$main` rendering. This is used to inject content into the page.

  ```yaml
  $bottom: !get 'fragments/footer'
  ```

- `$[variable name]`: Will inject the listed module into a child fragment with the same variable name listed as a part of its `items`.

  ```yaml
  my-blog-post.exo
  ---
  title: 'My page title'
  $content:
    !markdown blog/markdown/article-name
  $top: !get 'fragments/header'
  $bottom: !get 'fragments/footer'
  $main:
    - !get fragments/blog-article

  fragments/blog-article.exo
  ---
  items:
    - !main
      class: container blog-article
      items:
        - !section
          class: row justify-content-center m-md-5
          items:
            - !col
              class: col col-10 col-lg-7
              items:
                - $content # $content from the parent file will end up here during rendering
  ```

## Default modules

### `!fragment`

All-purpose module that renders a `<div>` by default, but can be any HTML element by including an `as: something` key. Has several shortcut modules that include some out of the box configurations

- `!article`: Renders an `<article>` with room for a header and content.
- `!col`: Renders a `<div>` with some predefined `col-` classes.
- `!footer`: Renders a `<footer>`.
- `!header`: Renders a `<header>`.
- `!main`: Renders a `<main>`.

```yaml
---
items:
  - !fragment
    as: section
    items:
      - !col
        content: 'Stuff and things!'
      - !fragment
        content: 'Fragment content'
```

Renders as:

```html
<section>
  <div class="col">
    <p>Stuff and things!</p>
  </div>
  <div>
    <p>Fragment content</p>
  </div>
</section>
```

---

### `!get`

Dynamically renders the specified fragment file into that location. Must be a `.exo` file, but can be anywhere relative to the document root. Think portals.

```yaml
content: !get 'fragments/nav-bar.exo'
```

---

### `!markdown`

Dynamically loads and renders a markdown file.

```yaml
content: !markdown 'markdown/page-1-content.md'

page-1-content.md
---
# Page title

My content [with a link](https://example.com/link)
```

Renders as:

```html
<div>
  <h1>Page title</h1>
  <p>My content <a href="https://example.com/link">with a link</a></p>
</div>
```

---

### `!navbar`

```yaml
- !navbar
  items:
    - "Home": '/'
    - "All kinds of links": 'https://example.com'
    - "Here's a link": '#on-page-link'
```

Renders as:

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

---

### `!section`

```yaml
- !section
  id: first
  title: '# First!'
  class: row
  items:
    - !col
      content: |
        ## Here is a column

    - !col
      content: |
        ## Here is another column

        You can add images and tables in here, too.

        | Tables        | Are           | Cool  |
        | ------------- |:-------------:| -----:|
        | col 3 is      | right-aligned | $1600 |
```

Renders as:

```html
<section class=”row” id="first">
  <h1>First!</h1>
  <div class="col">
    <h2>Here is a column</h2>
  </div>
  <div class="col">
    <h2>Here is another column</h2>
    <p>You can add images and tables in here, too.</p>
    <table>
      ...
    </table>
  </div>
</section>
```

## What's next?



---

## Breaking changes from v1.0 to v2.0

1. SSR is gone, don't ask me to bring it back

    This means you will need to have a base `index.html` file in your document root that looks like this:

    ```html
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>ExothermicJS Page</title>
    </head>
    <body>
      <div id="__exothermic"></div>
      <script src="https://unpkg.com/@exothermic/core@2.0.0/dist/exothermic-core.js"></script>
    </body>
    </html>
    ```

1. We must now ship some configurations client side

    You will need to include an `exothermic.config.json` file in your document root that has this, as a minimum:

    ```json
    {
      "path": "/pages"
    }
    ```

    The `path` is the relative path to where all your pages live.

1. To lower confusion, templates are now separated from pages. What this means is you'll need to move your `base.exo` file into its own `/templates` directory off of the document root.

1. Move everything out of `/static` into the document root. I didn't like it anyway.

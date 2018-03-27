# ReactY | Yaml based templating for ReactJS
## Creating resposnive, accessible, and clean HTML without all the render() vomit.

### Navigation

#### Horizontal Navigation Bar

```yaml
nav:
  ? [Relative Link, External Link]: ['/relative/link', 'https://example.com']
```

**Renders as**

```html
<nav aria-label="Top navigation">
  <ul role="menubar">
    <li role="none"><a href="/relative/link" role="menuitem">Relative Link</a>
    <li role="none"><a href="https://example.com" role="menuitem">External Link</a>
  <ul>
</nav>
```

#### Vertial Tree Navigation

```yaml
nav:
  - Relative Link: '/relative/link'
  - External Link: 'https://example.com'
```

**Renders as**

```html
<nav aria-label="Contextual navigation">
  <ul role="tree">
    <li role="none"><a href="/relative/link" role="treeitem" aria-setsize="2" aria-posinset="1">Relative Link</a>
    <li role="none"><a href="https://example.com" role="treeitem" aria-setsize="2" aria-posinset="2">External Link</a>
  <ul>
</nav>
```

### Banner

```yaml
banner_space: https://example.com/images/logo.svg
```

**Renders as**

```html
<section class="position banner" role="banner"> </section>
```
```css
.position.banner { background-image: url(http://example.com/images/logo.svg); background-size: cover; }
```

### Section

```yaml
Title of Section:
-
  class: col info-left
  content: |
    ## Markdown is used for markup
    And everything works
    
    1. Including this
    2. And this
      * And this
-
  class: col info-right
  content: |
    ## More data
    Can go over here
```

**Renders as**

```html
<article class="row">
  <h1 id="title-of-section">Title of Section</h1>
  <section class="col info-left">
    <h2>Markdown is used for markup</h2>
    <p>And everything works</p>
    <ol>
      <li>Including this</li>
      <li>
        And this
        <ul>
          <li>And this</li>
        </ul>
      </li>
    </ol>
  </section>
  <section class="col info-right">
    <h2>More data</h2>
    <p>Can go over here</p>
  </section>
</article>
```

### Nested rows

```yaml
Title of Section:
-
  - class: col 
    content: My column content
  - class: col
    content: More content
-
  - class: col 
    content: My column content
  - class: col
    content: More content
```

**Renders as**

```html
<article class="row">
  <h1 id="title-of-section">Title of Section</h1>
  <section class="row">
    <div class="col">
      <p>My column content</p>
    </div>
    <div class="col">
      <p>More content</p>
    </div>
  </section>
  <section class="row">
    ...
  </section>
</article>
```

### Template Referencing

```yaml
top_template:
  - !get
    path: /path/template_name.yml
```

### Article

```yaml
How to make money from home:
  date: 2018-01-01
  author: Some guy
  content: |
    Article body
```

## Modules
Modules are predesigned sets of code much like an [Ansible Module](http://docs.ansible.com/ansible/latest/modules_by_category.html) that are output via tags.

Examples:

```yaml
  top_slideshow:
    - !slideshow
      - https://example.com/img1.png
      - https://example.com/img2.png
      - https://example.com/img3.png
```
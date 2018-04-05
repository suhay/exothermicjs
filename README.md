# ReactY Templator - Yaml based templating for ReactJS

Create dynamic page content using YAML and Markdown

## Usage Examples

### Navigation Bar

```yaml
- !navbar
    items:
    - "Home": '/'
    - "All kinds of links": 'https://example.com'
    - "Here's a link nobody will click on": '#on-page-link'
```

**Renders as**

```html
<nav aria-label="Top navigation">
  <ul role="menubar">
    <li role="none"><a href="/" role="menuitem">Home</a></li>
    <li role="none"><a href="https://example.com" role="menuitem">All kinds of links</a></li>
    <li role="none"><a href="#on-page-link" role="menuitem">Here's a link nobody will click on</a></li>
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

        And some content to go with it. You can add images and tables in here, too.
```

**Renders as**

```html
<section class=”row”>
  <h1>First!</h1>
  <div>
  </div>
    <h2>Here is a column</h2>
  <div>
    <h2>Here is another column</h2>
    <p>And some content to go with it. You can even add images and tables in here, too.</p>
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

Example:

```yaml
  top_slideshow:
    - !slideshow
      items:
      - https://example.com/img1.png
      - https://example.com/img2.png
      - https://example.com/img3.png
```
module.exports = (router) => router.get(`/blog/:slug`, (req, res) => {
  res.render(`_blog-article.exo`, { slug: req.params.slug }, (err, html) => {
    if (err) {
      console.error(err)
      res.status(404).send(`Sorry, can't find that!`)
    }
    res.send(html)
  })
})

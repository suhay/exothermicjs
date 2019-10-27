import React from 'react'

const BlogArticle = ({ basePath = ``, slug = null }) => {
  const check = basePath
  return (
    <div>
      Slug:&nbsp;
      {slug}
      <br />
      Base:&nbsp;
      {check}
    </div>
  )
}

export default BlogArticle

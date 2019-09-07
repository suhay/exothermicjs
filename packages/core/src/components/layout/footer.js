import React from 'react'
import ReactMarkdown from 'react-markdown'

import content from '../util/content'

const Footer = ({ data, children, ...rest }) => (
  <footer className={data.class ? data.class : ``} {...rest}>
    {data.title && <ReactMarkdown source={data.title} renderers={{ root: React.Fragment }} />}
    {content(data.content)}
    {data.items}
    {children}
  </footer>
)

export default Footer

import React from 'react'
import ReactMarkdown from 'react-markdown'

const Footer = ({ data, children, ...rest }) => (
  <footer className={data.class ? data.class : ``} {...rest}>
    {data.title && <ReactMarkdown source={data.title} renderers={{ root: React.Fragment }} />}
    {data.content}
    {data.items}
    {children}
  </footer>
)

export default Footer

import React from 'react'
import ReactMarkdown from 'react-markdown'

const Header = ({ data, children, ...rest }) => (
  <header className={data.class ? data.class : ``} {...rest}>
    {data.title && <ReactMarkdown source={data.title} renderers={{ root: React.Fragment }} />}
    {data.content}
    {data.items}
    {children}
  </header>
)

export default Header

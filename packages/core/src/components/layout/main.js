import React from 'react'
import ReactMarkdown from 'react-markdown'

const Main = ({ data, children }) => (
  <main className={data.class ? data.class : ``}>
    {data.title && <ReactMarkdown source={data.title} renderers={{ root: React.Fragment }} />}
    {data.content}
    {data.items}
    {children}
  </main>
)

export default Main

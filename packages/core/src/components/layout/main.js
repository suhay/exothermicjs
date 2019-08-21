import React from 'react'
import ReactMarkdown from 'react-markdown'

import content from '../util/content'

const Main = ({ data, children }) => (
  <main className={data.class ? data.class : ``}>
    {data.title && <ReactMarkdown source={data.title} renderers={{ root: React.Fragment }} />}
    {content(data.content)}
    {data.items}
    {children}
  </main>
)

export default Main

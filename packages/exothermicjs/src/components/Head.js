import React, { PureComponent } from 'react'
import Meta from './Meta'
import HeadLink from './Link'
import Script from './Script'
import { version } from '../../'

class Head extends PureComponent {
  render() {
    const { data } = this.props
    const description = [{ description: data.description }]
    return (
      <React.Fragment>
        <Meta tags={data.meta} />
        <meta name="generator" content={`ExothermicJS ${version}`} />
        <title>{data.title}</title>
        <Meta tags={description} />
        <HeadLink links={data.links} />
        <Script scripts={data.headScripts} />
      </React.Fragment>
    )
  }
}

export default Head

import React, { Component } from 'react';
import Meta from '../modules/Meta';
import Link from '../modules/Link';
import Script from '../modules/Script';
import Base from './Base';

class Head extends Component {
  render() {
    let description = [{description:this.props.data.description}];
    return (
      <React.Fragment>
        <Meta tags={this.props.data.meta} />
        <meta name="generator" content={"ReactY Templator " + Base.version()} />
        <title>{this.props.data.title}</title>
        <Meta tags={description} />
        <Link links={this.props.data.links} />
        <Script scripts={this.props.data.headScripts} />
      </React.Fragment>
    );
  }
}

export default Head;
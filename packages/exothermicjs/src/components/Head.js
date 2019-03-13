import React, { Component } from 'react';
import Meta from './Meta';
import Link from './Link';
import Script from './Script';
import { Version } from '../../exothermic.config';

class Head extends Component {
  render() {
    let description = [{description:this.props.data.description}];
    return (
      <React.Fragment>
        <Meta tags={this.props.data.meta} />
        <meta name="generator" content={"ExothermicJS " + Version} />
        <title>{this.props.data.title}</title>
        <Meta tags={description} />
        <Link links={this.props.data.links} />
        <Script scripts={this.props.data.headScripts} />
      </React.Fragment>
    );
  }
}

export default Head;
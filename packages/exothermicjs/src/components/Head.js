import React, { Component } from 'react';
import Meta from 'Modules/Meta';
import Link from 'Modules/Link';
import Script from 'Modules/Script';
import {version} from 'Root/exothermic.config';

class Head extends Component {
  render() {
    let description = [{description:this.props.data.description}];
    return (
      <React.Fragment>
        <Meta tags={this.props.data.meta} />
        <meta name="generator" content={"ExothermicJS " + version} />
        <title>{this.props.data.title}</title>
        <Meta tags={description} />
        <Link links={this.props.data.links} />
        <Script scripts={this.props.data.headScripts} />
      </React.Fragment>
    );
  }
}

export default Head;
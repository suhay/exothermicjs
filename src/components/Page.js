import React, { Component } from 'react';
import Base from './Base'; 

class Page extends Component {
  render() {
    return (
      <Base data={this.props.data} />
    );
  }
}

export default Page;
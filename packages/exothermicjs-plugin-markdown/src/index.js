import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'
import fs from 'fs'
import path from 'path'

import pageState from '../../exothermicjs/src/state/page'

export class Markdown extends Component {
  constructor(props) {
		super(props)
		this.state = { 
			data: fs && typeof fs.readFileSync === 'function' ? fs.readFileSync(`${pageState.state.pagesPath}markdown/${this.props.data}.md`, 'utf8') : null,
			loading: fs && typeof fs.readFileSync === 'function' ? false : true
		}
	}
	
	componentDidMount() {
		fetch(`/load/pages/markdown/${this.props.data}.md`)
			.then(response => response.text())
			.then(data => this.setState({ 
				data,
				loading: false 
			}))
	}
  
  render() {
    const { data } = this.state
    return (
      <Fragment> 
        <ReactMarkdown source={data} escapeHtml={false} renderers={{root:React.Fragment}} />
      </Fragment>
    )
  }
}

export const Type = new yaml.Type('!markdown', {
  kind: 'scalar',
  resolve: function (data) {
    return data !== null;
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Markdown data={data} key="content" />;
  },
  instanceOf: Markdown,
  represent: function (data) {
    const rtn = { _tag: '!markdown', ...data }
    return rtn
  }
});
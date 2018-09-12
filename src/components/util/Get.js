import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'
import fs from 'fs'
import path from 'path'
import { FoldingCube } from 'better-react-spinkit'

import pageState from '../../state/page'
import { REACTY_SCHEMA } from 'Root/reacty.config.js'

class Get extends Component {
  constructor(props) {
		super(props)
		this.state = { 
			data: fs && typeof fs === 'function' ? yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, pageState.state.pagesPath + '/' + this.props.data), 'utf8'), { schema: REACTY_SCHEMA }) : null,
			loading: fs && typeof fs === 'function' ? false : true
		}
	}
	
	componentDidMount() {
		fetch(`/load/${this.props.data.replace('.yml', '')}`)
			.then(response => response.text())
			.then(data => this.setState({ 
				data: yaml.safeLoad(data, {
					schema: REACTY_SCHEMA
				}),
				loading: false 
			}))
	}
	
  render() {
		return (
			<Fragment>
				{!this.state.loading && this.state.data && this.state.data.hasOwnProperty('items') ? 
					(<Fragment>
						{this.state.data.items}
					</Fragment>) : ``}
				{!this.state.loading && this.state.data && this.state.data.hasOwnProperty('content') ?
					(<Fragment>
						<ReactMarkdown source={this.state.data.content} renderers={{root:Fragment}} />
					</Fragment>) : ``}
				{this.state.loading && <FoldingCube />}
			</Fragment>
		)
  }
}

var GetYamlType = new yaml.Type('!get', {
	kind: 'scalar',
	resolve: function (data) {
		return data !== null;
	},
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Get data={data} key='get' />;
  },
  instanceOf: Get
});

export {
   Get, GetYamlType
}
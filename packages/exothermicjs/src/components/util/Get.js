import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'
import fs from 'fs'
import path from 'path'

import Spinner from './Spinner'
import pageState from '../../state/page'
import { EXO_SCHEMA } from 'Root/exothermic.config.js'

class Get extends Component {
  constructor(props) {
		super(props)
		this.state = { 
			data: fs && typeof fs.readFileSync === 'function' ? yaml.safeLoad(fs.readFileSync(`${pageState.state.pagesPath}/${this.props.data}.exo`, 'utf8'), { schema: EXO_SCHEMA }) : null,
			loading: fs && typeof fs.readFileSync === 'function' ? false : true
		}
	}
	
	componentDidMount() {
		fetch(`/load/${this.props.data}`)
			.then(response => response.text())
			.then(data => this.setState({ 
				data: yaml.safeLoad(data, {
					schema: EXO_SCHEMA
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
				{this.state.loading && <Spinner name='folding-cube' />}
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
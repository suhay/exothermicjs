import React, { Fragment } from 'react'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'
import { Upload } from 'exothermicjs-plugin-upload'
// import { Types } from 'exothermicjs'

import { 
  MainYamlType,
  SectionYamlType,
  FooterYamlType
} from './types'

import { plugins } from 'exothermicjs/exothermic.config'
import { pageState } from 'exothermicjs/src/state'

export default class OffCanvas extends React.Component {
  constructor(props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }
  
  handleSave() {
    const { children, dump } = this.props
    fetch(`/api/${this.props.path}`.replace('//', '/'), { 
      credentials: `same-origin`, 
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        text: dump(children)
      })
    })
      .then(response => response.text())
      .catch(error => { throw error})
  }
  
  componentDidMount() {
    pageState.setState({ editing: true })
  }
  
  componentWillUnmount() {
    pageState.setState({ editing: false })
  }
  
  render() {
    const { children, dump } = this.props
    return (
      <Fragment>
        <h1>Endothermic Dashboard Off-Canvas!!!</h1>
        {children}
        <button>Add</button>
        <button onClick={this.handleSave}>Save</button>
        <div className="uploads">
          <Upload />
        </div>
      </Fragment>
    )
  }
}

export const Schema = () => {
  const things = require('exothermicjs')
  console.log('here')
  console.log(things.Types)
  console.log('here2')
  const { Types, plugins } = require('exothermicjs')
  const InteractiveTypes = { MainYamlType, SectionYamlType, FooterYamlType }
  
  const dashboardSchema = {...Types, ...InteractiveTypes}
  const pluginsTypes = plugins.map(plugin => plugin.Type)
  return yaml.Schema.create(Object.keys(dashboardSchema).map((key) => dashboardSchema[key]).concat(plugins))
}
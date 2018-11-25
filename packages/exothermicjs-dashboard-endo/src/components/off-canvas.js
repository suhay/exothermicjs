import React, { Fragment } from 'react'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'

import { 
  MainYamlType,
  SectionYamlType,
  FooterYamlType
} from './types'
import { Types } from 'exothermicjs/exothermic.config'

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
    console.log(dump(children))
  }
  
  render() {
    const { children, dump } = this.props
    return (
      <Fragment>
        <h1>Endothermic Dashboard Off-Canvas!!!</h1>
        {children}
        <button>Add</button>
        <button onClick={this.handleSave}>Save</button>
      </Fragment>
    )
  }
}

const buildDashboardSchema = () => {
  const InteractiveTypes = { MainYamlType, SectionYamlType, FooterYamlType }
  const dashboardSchema = {...Types, ...InteractiveTypes}
  return yaml.Schema.create(Object.values(dashboardSchema))
}

export const DashboardSchema = buildDashboardSchema()

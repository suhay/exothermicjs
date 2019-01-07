import React, { Fragment } from 'react'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'

import { 
  MainYamlType,
  SectionYamlType,
  FooterYamlType
} from './types'
import { Types, plugins } from 'exothermicjs/exothermic.config'
import { Upload } from 'exothermicjs'
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
    console.log(dump(children))
  }
  
  componentDidMount() {
    pageState.setState({ editing: true })
  }
  
  componentDidUnmount() {
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

const buildDashboardSchema = () => {
  const InteractiveTypes = { MainYamlType, SectionYamlType, FooterYamlType }
  const dashboardSchema = {...Types, ...InteractiveTypes}
  return yaml.Schema.create(Object.keys(dashboardSchema).map((key) => dashboardSchema[key]).concat(plugins))
}

export const DashboardSchema = buildDashboardSchema()

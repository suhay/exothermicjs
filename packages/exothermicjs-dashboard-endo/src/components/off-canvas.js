import React, { Fragment } from 'react'
import yaml from 'js-yaml'

import { 
  MainYamlType,
  SectionYamlType,
  FooterYamlType
} from './types'
import { Types } from '../../../exothermicjs/exothermic.config'

export default class OffCanvas extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Fragment>
        <h1>Endothermic Dashboard Off-Canvas!!!</h1>
        {children}
        <button>Add</button>
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

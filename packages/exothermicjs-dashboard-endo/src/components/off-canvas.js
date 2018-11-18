import React, { Fragment } from 'react'
import yaml from 'js-yaml'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import { 
  MainYamlType,
  SectionYamlType,
  FooterYamlType
} from './types'
import { Types } from '../../../exothermicjs/exothermic.config'

class OffCanvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      grid: 8,
    };
  }
  
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

export default DragDropContext(HTML5Backend)(OffCanvas)
export const DashboardSchema = buildDashboardSchema()

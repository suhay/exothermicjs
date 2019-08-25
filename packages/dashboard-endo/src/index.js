import React from 'react'
import coreSchema from '@exothermic/core/src/schema'

import CanvasBoard from './components/off-canvas'
import {
  MainYamlType,
  FooterYamlType,
  SectionYamlType,
} from './components/types'

// import './styles/endothermic.css'

export const OffCanvasContainer = ({ dump, path, children }) => (
  <CanvasBoard dump={dump} path={path}>
    {children}
  </CanvasBoard>
)

export const schema = () => coreSchema({ adds: { MainYamlType, FooterYamlType, SectionYamlType }, set: true })

export * from '../exothermic.config'

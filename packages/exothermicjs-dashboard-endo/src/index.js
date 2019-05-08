import React from 'react'

import CanvasBoard, { Schema } from './components/off-canvas'
import './styles/endothermic.css'

export const OffCanvas = ({ dump, path, children }) => (
  <CanvasBoard dump={dump} path={path}>
    {children}
  </CanvasBoard>
)

export { Schema }

window.EXOTHERMIC = window.EXOTHERMIC || {}
window.EXOTHERMIC.Dashboard = window.EXOTHERMIC.Dashboard || {}
window.EXOTHERMIC.Dashboard = {
  ...window.EXOTHERMIC.Dashboard,
  OffCanvas,
  Schema,
}

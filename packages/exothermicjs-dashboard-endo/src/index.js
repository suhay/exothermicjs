import React from 'react'

import CanvasBoard, { Schema } from './components/off-canvas'
import './styles/endothermic.css'

export const OffCanvasContainer = ({ dump, path, children }) => (
  <CanvasBoard dump={dump} path={path}>
    {children}
  </CanvasBoard>
)

export { Schema }

if (window) {
  window.EXOTHERMIC = window.EXOTHERMIC || {}
  window.EXOTHERMIC.Dashboard = window.EXOTHERMIC.Dashboard || {}
  window.EXOTHERMIC.Dashboard = {
    ...window.EXOTHERMIC.Dashboard,
    OffCanvas: OffCanvasContainer,
    Schema,
  }
} else {
  setTimeout(() => {
    if (window) {
      window.EXOTHERMIC = window.EXOTHERMIC || {}
      window.EXOTHERMIC.Dashboard = window.EXOTHERMIC.Dashboard || {}
      window.EXOTHERMIC.Dashboard = {
        ...window.EXOTHERMIC.Dashboard,
        OffCanvas: OffCanvasContainer,
        Schema,
      }
    }
  }, 500)
}

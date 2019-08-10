import React from 'react'

import CanvasBoard, { Schema } from './components/off-canvas'
import './styles/endothermic.css'

export const OffCanvasContainer = ({ dump, path, children }) => (
  <CanvasBoard dump={dump} path={path}>
    {children}
  </CanvasBoard>
)

export { Schema }

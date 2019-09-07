import React from 'react'
import { Draggable as SmoothDraggable } from 'react-smooth-dnd'
import DragIndicator from '@material-ui/icons/DragIndicator'

const Draggable = ({ children }) => (
  <SmoothDraggable>
    <span className="drag-handle"><DragIndicator /></span>
    <div className="draggable-item">
      {children}
    </div>
  </SmoothDraggable>
)

export default Draggable

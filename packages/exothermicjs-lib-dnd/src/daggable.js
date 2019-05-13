import React, { PureComponent } from 'react'
import { Draggable as SmoothDraggable } from 'react-smooth-dnd'
import { DragIndicator } from '@material-ui/icons'

export default class Draggable extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <SmoothDraggable>
        <span className="drag-handle"><DragIndicator /></span>
        <div className="draggable-item">
          {children}
        </div>
      </SmoothDraggable>
    )
  }
}

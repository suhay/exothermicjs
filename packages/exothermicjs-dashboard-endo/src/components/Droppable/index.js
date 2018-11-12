import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

export function makeDroppable(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <WrappedComponent
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...this.props}
            >
              compo
            </WrappedComponent>
          )}
        </Droppable>
      )
    }
  }
}
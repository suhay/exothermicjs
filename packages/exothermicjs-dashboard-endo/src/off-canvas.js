import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default class OffCanvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      grid: 8,
    };
    this.onDragEnd = this.onDragEnd.bind(this)
    this.reorder = this.reorder.bind(this)
    this.getItemStyle = this.getItemStyle.bind(this)
    this.getListStyle = this.getListStyle.bind(this)
  }

  getItemStyle(isDragging, draggableStyle) {
    return {
      // some basic styles to make the items look a bit nicer
      userSelect: 'none',
      padding: this.state.grid * 2,
      margin: `0 0 ${this.state.grid}px 0`,

      // change background colour if dragging
      background: isDragging ? 'lightgreen' : 'grey',

      // styles we need to apply on draggables
      ...draggableStyle,
    }
  }

  getListStyle(isDraggingOver) {
    return {
      background: isDraggingOver ? 'lightblue' : 'lightgrey',
      padding: this.state.grid,
      width: 250,
    }
  }
  
  reorder(list, startIndex, endIndex) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }
  
  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );
    this.setState({
      items,
    })
  }

  render() {
    const { children } = this.props
    
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h1>Endothermic Dashboard Off-Canvas!!!</h1>
        { children }
        <button>Add</button>
      </DragDropContext>
    )
  }
}
import React, { Component } from 'react'
import { Container as SmoothContainer, Draggable as SmoothDraggable } from 'react-smooth-dnd'
import { applyDrag } from './utils'

export class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items
    }
//     this.containerDiv = this.containerDiv 
// 		this.prevContainer = this.containerDiv
// 		this.container = container(this.containerDiv, this.getContainerOptions())
  }
  
  render() {
    return (
      <div>
        <SmoothContainer groupName="1" getChildPayload={i => this.state.items[i]} onDrop={e => this.setState({ items: applyDrag(this.state.items, e) })}>
          <SmoothDraggable>test</SmoothDraggable>
          {this.props.items}
        </SmoothContainer>
      </div>
    )
  }
}

export class Draggable extends Component {
  render() {
    return (
      <SmoothDraggable>
        <div className="draggable-item">
          {this.props.children}
        </div>
      </SmoothDraggable>
    )
  }
}
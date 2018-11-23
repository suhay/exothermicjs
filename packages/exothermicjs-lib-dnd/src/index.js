import React, { Component } from 'react'
import { Container as SmoothContainer, Draggable as SmoothDraggable } from 'react-smooth-dnd'

import dragState from 'exothermicjs/src/state/draggables'

import { applyDrag } from './utils'

export class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items
    }
  }
  
  render() {
    return (
      <div>
        <SmoothContainer 
          groupName="1" 
          getChildPayload={i => this.state.items[i]} 
          onDrop={e => {
            const result = applyDrag(this.state.items, e)
            const draggables = dragState.state.draggables
            draggables[this.props.id] = result
            dragState.setState({ draggables })
            this.setState({ items: result })}
          }
        >
          {this.state.items}
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
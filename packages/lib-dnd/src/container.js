import React, { Component } from 'react'
import { Container as SmoothContainer } from 'react-smooth-dnd'

import applyDrag from './utils'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items,
    }
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(e) {
    const { items } = this.state
    const result = applyDrag(items, e)
    this.setState({ items: result })
  }

  render() {
    const { items } = this.state
    return (
      <div>
        <SmoothContainer
          groupName="1"
          getChildPayload={i => items[i]}
          dragHandleSelector=".drag-handle"
          onDrop={this.onDrop}
        >
          {items}
        </SmoothContainer>
      </div>
    )
  }
}

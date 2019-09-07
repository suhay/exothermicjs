import React, { useState } from 'react'
import { Container as SmoothContainer } from 'react-smooth-dnd'

import applyDrag from './utils'

const Container = ({ items: propItems }) => {
  const [items, setItems] = useState(propItems)

  const onDrop = (e) => {
    const result = applyDrag(items, e)
    setItems(result)
  }

  return (
    <div>
      <SmoothContainer
        groupName="1"
        getChildPayload={i => items[i]}
        dragHandleSelector=".drag-handle"
        onDrop={onDrop}
      >
        {items}
      </SmoothContainer>
    </div>
  )
}

export default Container

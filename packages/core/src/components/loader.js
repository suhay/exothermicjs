import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Subscribe } from 'statable'

import Page from './page'
import { pageState } from '../state'

const Loader = ({ 
  data: propsData,
}) => {
  if (propsData) {
    pageState.setState({
      data: propsData,
    })
  }

  return (
    <Subscribe to={[pageState]}>
      {({ data }) => (
        <div className="base">
          <BrowserRouter>
            <Page data={data} />
          </BrowserRouter>
        </div>
      )}
    </Subscribe>
  )
}

export default Loader

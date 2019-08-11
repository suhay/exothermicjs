import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useGlobal } from 'reactn'


import Page from './page'

const Loader = ({ 
  data: propsData,
  raw,
}) => {
  const [data] = useGlobal(`data`)
  const [global, setGlobal] = useGlobal()
  if (Object.keys(global).length === 0) {
    setGlobal(raw)
  }

  const [localData, setData] = useState(propsData)
  useEffect(() => {
    if (data) setData(data)
    return () => {}
  }, [data])

  return (
    <div className="base">
      <BrowserRouter>
        <Page data={localData} />
      </BrowserRouter>
    </div>
  )
}

export default Loader

import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useGlobal } from 'reactn'

import Page from './page'

const Loader = ({ 
  data: propsData,
  raw,
  options,
}) => {
  const [data] = useGlobal(`data`)
  const [status] = useGlobal(`status`)
  const [global, setGlobal] = useGlobal()

  const [localData, setData] = useState(propsData)
  
  if (Object.keys(global).length === 0) {
    setGlobal({ raw })
  }
  setGlobal({ options })

  useEffect(() => {
    if (data) setData(data)
    return () => {}
  }, [data])

  return (
    <div className="base">
      <BrowserRouter>
        {status && status === 404 ? (<p>Sorry can't find that!</p>) : (<Page data={localData} />)}
      </BrowserRouter>
    </div>
  )
}

export default Loader

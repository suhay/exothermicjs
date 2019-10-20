import React, { useState, useEffect } from 'react'
import { useGlobal } from 'reactn'

import Page from './page'

const Loader = ({ 
  data: propsData,
  raw,
  options,
}) => {
  const [data] = useGlobal(`data`)
  const [status] = useGlobal(`status`)
  const [, setGlobal] = useGlobal()

  const [localData, setData] = useState(propsData)
  
  setGlobal({ raw, options })

  useEffect(() => {
    if (data) setData(data)
    return () => {}
  }, [data])

  return (
    <div className="base">
      {status && status === 404 ? (<p>Sorry can't find that!</p>) : (<Page data={localData} />)}
    </div>
  )
}

export default Loader

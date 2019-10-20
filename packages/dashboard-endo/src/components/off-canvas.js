import React from 'react'
import fetch from 'isomorphic-fetch'
// import Upload from '@exothermic/plugin-upload'

const OffCanvas = ({ children, dump, path }) => {
  const handleSave = () => {
    fetch(`/admin/${path}`.replace(`//`, `/`), {
      credentials: `same-origin`,
      method: `PATCH`,
      headers: {
        'Content-Type': `application/json; charset=utf-8`,
      },
      body: JSON.stringify({
        text: dump(children),
      }),
    })
      .then((response) => response.text())
      .then((text) => console.log(text))
      .catch((error) => { throw error })
  }

  return (
    <>
      <h1>Endothermic Dashboard Off-Canvas!!!</h1>
      {children}
      <button type="button">Add</button>
      <button type="button" onClick={handleSave}>Save</button>
      <div className="uploads">
        {/* <Upload /> */}
      </div>
    </>
  )
}

export default OffCanvas

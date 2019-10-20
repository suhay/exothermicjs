import React, { useState } from 'react'
import fetch from 'isomorphic-fetch'

const Upload = () => {
  const [fileURL, setFileURL] = useState(``)
  const [uploadInput, setUploadInput] = useState(``)
  const [fileName, setFileName] = useState(``)

  const handleUpload = (event) => {
    event.preventDefault()
    const data = new global.FormData()
    data.append(`file`, uploadInput.files[0])
    data.append(`filename`, fileName.value)

    fetch(`/api/upload`, {
      method: `POST`,
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        setFileURL(`${body.file}`)
      })
    })
  }

  return (
    <form onSubmit={handleUpload}>
      <div>
        <input ref={(ref) => setUploadInput(ref)} type="file" />
      </div>
      <div>
        <input ref={(ref) => setFileName(ref)} type="text" placeholder="Enter the desired name of file" />
      </div>
      <br />
      <div>
        <button type="button">Upload</button>
      </div>
      <img src={fileURL} alt="img" />
    </form>
  )
}


export default Upload

import React from 'react'
import fetch from 'isomorphic-fetch'

export class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileURL: '',
    };
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload(event) {
    event.preventDefault()
    const data = new FormData()
    data.append('file', this.uploadInput.files[0])
    data.append('filename', this.fileName.value)

    fetch('/api/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ fileURL: `${body.file}` })
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleUpload}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.fileURL} alt="img" />
      </form>
    )
  }
}
import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';
import fetch from 'isomorphic-fetch'
import queryString from 'query-string'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: null,
      fieldValues: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
    const val = {}
    val[event.target.name] = event.target.value
    this.setState({fieldValues: val})
  }
  
  handleSubmit(event) {
    event.preventDefault()
    fetch(`${event.target.action}${event.target.method == `get` ? '?' + queryString.stringify(this.state.fieldValues) : ``}`, { method: event.target.method || `post` })
			.then(response => response.text())
			.then(data => this.setState({ 
				results: data,
			}))
  }
  
  render() {
    const { action, method } = this.props.data
    const classes = this.props.data.class
    
    return (
      <Fragment>
        <form className={classes} method={method} action={action} onSubmit={this.handleSubmit}>
          {this.props.data.items.map((field, key) => {
            const { type, id } = field
            switch (type) {
              default:
                return <input key={key} onChange={this.handleChange} {...field} />
            }
          })}
          <input type="submit" id="submit" name="submit"/>
        </form>
        {this.state.results && <div className="results">
          {this.state.results}
        </div>}
      </Fragment>
    )
  }
}

const FormYamlType = new yaml.Type('!form', {
  kind: 'mapping',
  resolve: function (data) {
    return data && data.id
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Form data={data} key={data.id} />;
  },
  instanceOf: Form
});

export {
   Form, FormYamlType
}
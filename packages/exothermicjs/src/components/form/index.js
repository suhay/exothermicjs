import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';
import fetch from 'isomorphic-fetch'
import queryString from 'query-string'
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik'

import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import Select from './select'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: null,
      fieldValues: {}
    }
  }
  
  render() {
    const {
      action = '', 
      method = 'post',
      items = []
    } = this.props.data ? this.props.data : {}
    const classes = this.props.data ? this.props.data.class : ''
    return (
      <Fragment>
        <Formik
  //         initialValues={}
          onSubmit={(values, actions) => {
            fetch(`${action}${method.toLowerCase() == 'get'
                  ? '?' + queryString.stringify(values) 
                  : ''}`, { 
                    method: event.target.method || `post` 
            })
              .then(
                response => response.text(),
                data => this.setState({ 
                  results: values,
                }),
                error => {
                  actions.setSubmitting(false);
                  actions.setStatus({ msg: 'Set some arbitrary status or data' });
                }
              )
          }}
          render={({ errors, status, isSubmitting, values, resetForm }) => (
            <FormikForm className={classes} method={method} action={action}>
              {items.map((field, i) => {
                const { type, name, label } = field
                switch (type) {
                  case 'checkbox' :
                    return <Checkbox key={name + i} {...field} />
                  case 'radio' :
                    return <Radio key={name + i} {...field} />
                  case 'select' :
                    return <Select key={name + i} {...field} value={values && values[name] ? values[name] : ''} />
                  case 'reset' :
                    return (
                      <button key={type + i} type="button" disabled={isSubmitting} onClick={resetForm}>
                        {label}
                      </button>)
                  case 'submit' :
                    return (
                      <button key={type + i} type={type} disabled={isSubmitting}>
                        {label}
                      </button>)
                  default:
                    return <Input key={name + i} value={values && values[name] ? values[name] : ''} {...field} />
                }
              })}
            </FormikForm>
          )} 
        />
        {this.state.results && <div className="results">
          {this.state.results}
        </div>}
      </Fragment>
    )
  }
}

export const FormYamlType = new yaml.Type('!form', {
  kind: 'mapping',
  resolve: function (data) {
    return data && data.id
  },
  construct: function (data) {
    data = data || {}; // in case of empty node
    return <Form data={data} key={data.id} />;
  },
  instanceOf: Form
})

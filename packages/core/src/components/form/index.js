import React, { Component, Fragment } from 'react'
import yaml from 'js-yaml'
import fetch from 'isomorphic-fetch'
import queryString from 'query-string'
import {
  Formik,
  Form as FormikForm,
} from 'formik'

import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import Select from './select'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: null,
    }
  }

  render() {
    const {
      data: {
        action = ``,
        method = `post`,
        items = [],
        class: classes = ``,
      },
    } = this.props || { data: {} }
    const {
      results,
    } = this.state
    return (
      <Fragment>
        <Formik
  //         initialValues={}
          onSubmit={(values, actions) => {
            fetch(`${action}${method.toLowerCase() === `get`
              ? `?${queryString.stringify(values)}`
              : ``}`, {
              method: global.event.target.method || `post`,
            })
              .then(
                response => response.text(),
                () => this.setState({
                  results: values,
                }),
                (error) => {
                  console.error(error)
                  actions.setSubmitting(false)
                  actions.setStatus({ msg: `Set some arbitrary status or data` })
                }
              )
          }}
          render={({
            isSubmitting, values, resetForm,
          }) => (
            <FormikForm className={classes} method={method} action={action}>
              {items.map((field, i) => {
                const { type, name, label } = field
                switch (type) {
                  case `checkbox`:
                    return <Checkbox key={name + i} {...field} />
                  case `radio`:
                    return <Radio key={name + i} {...field} />
                  case `select`:
                    return <Select key={name + i} {...field} value={values && values[name] ? values[name] : ``} />
                  case `reset`:
                    return (
                      <button key={type + i} type="button" disabled={isSubmitting} onClick={resetForm}>
                        {label}
                      </button>
                    )
                  case `submit`:
                    return (
                      <button key={type + i} type="submit" disabled={isSubmitting}>
                        {label}
                      </button>
                    )
                  default:
                    return <Input key={name + i} value={values && values[name] ? values[name] : ``} {...field} />
                }
              })}
            </FormikForm>
          )}
        />
        {results && (
          <div className="results">
            {results}
          </div>
        )}
      </Fragment>
    )
  }
}

export const FormYamlType = new yaml.Type(`!form`, {
  kind: `mapping`,
  resolve(data) {
    return data && data.id
  },
  construct(data = {}) {
    return <Form data={data} key={data.id} />
  },
  instanceOf: Form,
})

import React from 'react'
import InputMask from 'react-input-mask'
import { Field } from 'formik'

import './style.css'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleFocus() {
    this.setState({ focus: true })
  }

  handleBlur() {
    this.setState({ focus: false })
  }

  render() {
    const {
      focus,
      error,
    } = this.state
    const {
      label,
      mask,
      type,
      autoComplete,
      name,
      value,
      required,
    } = this.props
    return (
      <label className={`inputWrapper ${focus ? `inputFocus` : ``} ${error ? `inputErr` : ``}`}>
        <span className={`inputLabel ${(value || focus) ? `inputLabelMoved` : ``} ${required ? `requiredInput` : ``}`}>
          {label}
        </span>
        {mask && (
        <Field
          name={name}
          render={({ field }) => (
            <InputMask
              mask={mask}
              maskChar={null}
              className="input"
              type={type || `text`}
              autoComplete={autoComplete}
              name={name}
              onFocus={() => this.handleFocus()}
              onBlur={() => this.handleBlur()}
              {...this.props}
              {...field}
            />
          )}
        />
        )}
        {!mask && (
        <Field
          type={type || `text`}
          autoComplete={autoComplete}
          name={name}
          className="input"
          onFocus={() => this.handleFocus()}
          onBlur={() => this.handleBlur()}
          {...this.props}
        />
        )}
        {error && (
        <span className="inputErrMsg" data-error>{error}</span>
        )}
      </label>
    )
  }
}

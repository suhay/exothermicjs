import React from 'react'
import { Field } from 'formik'

export default class Select extends React.Component {
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
      name,
      value,
      options,
      required,
    } = this.props
    return (
      <label className={`selectWrapper ${focus ? `selectFocus` : ``} ${error ? `selectErr` : ``}`}>
        <span className={`selectLabel ${(value || focus) ? `selectLabelMoved` : ``} ${required ? `requiredInput` : ``}`}>
          {label}
        </span>
        <Field
          component="select"
          name={name}
          className="select"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={value}
        >
          <option disabled value="" />
          {options.map((option, i) => <option key={i} value={option.value}>{option.label}</option>)}
        </Field>
      </label>
    )
  }
}

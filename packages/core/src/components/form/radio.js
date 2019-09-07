import React, { PureComponent } from 'react'
import { Field } from "formik"

export default class Radio extends PureComponent {
  render() {
    const {
      name,
      value,
      required,
      label,
    } = this.props
    return (
      <Field name={name} value={value}>
        {({ field, form }) => (
          <label className="clickableLabel">
            <div className={`radio ${field.value && field.value === value ? `radioChecked` : ``}`}>
              <label className="inputWrapper">
                <input
                  type="radio"
                  {...this.props}
                  checked={!!(field.value && field.value === value)}
                  onChange={() => {
                    form.setFieldValue(name, value)
                  }}
                />
              </label>
              {field.value && field.value === value && <div className="radioIcon">✓</div>}
            </div>
            <div className={required ? `requiredInput` : ``}>{label}</div>
          </label>
        )}
      </Field>
    )
  }
}

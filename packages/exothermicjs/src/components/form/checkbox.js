import React from 'react'
import { Field } from "formik"

export default class Checkbox extends React.PureComponent {
  render() {
    const {
      name, value, required, label,
    } = this.props
    return (
      <Field name={name} value={value}>
        {({ field, form }) => (
          <label className="clickableLabel">
            <div className={`checkbox ${field.value && field.value.includes(value) ? `checkboxChecked` : ``}`}>
              <label className="inputWrapper">
                <input
                  type="checkbox"
                  {...this.props}
                  checked={!!(field.value && field.value.includes(value))}
                  onChange={() => {
                    if (field.value && field.value.includes(value)) {
                      const nextValue = field.value.filter(
                        val => val !== value
                      )
                      form.setFieldValue(name, nextValue)
                    } else {
                      const nextValue = field.value ? field.value.concat(value) : [value]
                      form.setFieldValue(name, nextValue)
                    }
                  }}
                />
              </label>
              {field.value && field.value.includes(value) && <div className="checkboxIcon">✓</div>}
            </div>
            <div className={required ? `requiredInput` : ``}>{label}</div>
          </label>
        )}
      </Field>
    )
  }
}

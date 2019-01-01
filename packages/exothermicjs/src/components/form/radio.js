import React from 'react'
import { Field } from "formik"

export default class Radio extends React.Component{
  render() {
    return (
      <Field name={this.props.name} value={this.props.value}>
        {({ field, form }) => (
          <label className='clickableLabel'>
            <div className={`radio ${field.value && field.value == this.props.value ? 'radioChecked' : ''}`}>
              <label className='inputWrapper'>
                <input
                  type="radio"
                  {...this.props}
                  checked={field.value && field.value == this.props.value ? true : false}
                  onChange={() => {
                    form.setFieldValue(this.props.name, this.props.value);
                  }}
                />
              </label>
              {field.value && field.value == this.props.value && <div className='radioIcon'>✓</div>}
            </div>
            <div className={this.props.required ? 'requiredInput' : ``}>{this.props.label}</div>
          </label>
        )}
      </Field>
    )
  }
}
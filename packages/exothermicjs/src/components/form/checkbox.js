import React from 'react'
import { Field } from "formik"

export default class Checkbox extends React.Component{
  render() {
    return (
      <Field name={this.props.name} value={this.props.value}>
        {({ field, form }) => (
          <label className='clickableLabel'>
            <div className={`checkbox ${field.value && field.value.includes(this.props.value) ? 'checkboxChecked' : ''}`}>
              <label className='inputWrapper'>
                <input
                  type="checkbox"
                  {...this.props}
                  checked={field.value && field.value.includes(this.props.value) ? true : false}
                  onChange={() => {
                    if (field.value && field.value.includes(this.props.value)) {
                      const nextValue = field.value.filter(
                        value => value !== this.props.value
                      );
                      form.setFieldValue(this.props.name, nextValue);
                    } else {
                      const nextValue = field.value ? field.value.concat(this.props.value) : [this.props.value];
                      form.setFieldValue(this.props.name, nextValue);
                    }
                  }}
                />
              </label>
              {field.value && field.value.includes(this.props.value) && <div className='checkboxIcon'>✓</div>}
            </div>
            <div className={this.props.required ? 'requiredInput' : ``}>{this.props.label}</div>
          </label>
        )}
      </Field>
    )
  }
}
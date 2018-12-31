import React from 'react'
import { Field } from "formik"

export default class Checkbox extends React.Component{
  render() {
    return (
      <Field name={this.props.name} value={this.props.value}>
        {({ field, form }) => (
          <label className='clickableLabel'>
            {console.log(field)}
            <div className={`checkbox ${field.value.includes(this.props.value) ? 'checkboxChecked' : ''}`}>
              <label className='inputWrapper'>
                <input
                  type="checkbox"
                  {...this.props}
                  checked={field.value.includes(this.props.value)}
                  onChange={() => {
                    if (field.value.includes(this.props.value)) {
                      const nextValue = field.value.filter(
                        value => value !== this.props.value
                      );
                      form.setFieldValue(this.props.name, nextValue);
                    } else {
                      const nextValue = field.value.concat(this.props.value);
                      form.setFieldValue(this.props.name, nextValue);
                    }
                  }}
                />
              </label>
              {field.value.includes(this.props.value) && <div className='checkboxIcon'>✓</div>}
            </div>
            <div>{this.props.value}</div>
          </label>
        )}
      </Field>
    )
  }
}
import React from 'react'
import { Field, ErrorMessage } from 'formik'

export default class Select extends React.Component{
  constructor(props){
		super(props)
		this.state = {
			focus: false,
		}
		this.handleFocus = this.handleFocus.bind(this)
		this.handleBlur = this.handleBlur.bind(this)
	}

	handleFocus(e) {
		this.setState({ focus: true })
	}

  handleBlur(e) {
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
			checked,
			value,
      options,
		} = this.props
    return (
      <label className={`selectWrapper ${focus ? 'selectFocus' : ''} ${error ? 'selectErr' : ''}`}>
				<span className={`selectLabel ${(value || focus) ? 'selectLabelMoved' : ''} ${this.props.required ? 'requiredInput' : ``}`}>
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
          <option disabled value='' />
          {options.map((option, i) => <option key={i} value={option.value}>{option.label}</option>)}
        </Field>
      </label>
    )
  }
}
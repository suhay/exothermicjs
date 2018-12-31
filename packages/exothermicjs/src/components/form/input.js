import React from 'react'
import InputMask from 'react-input-mask'
import { Field, ErrorMessage } from 'formik'

import './style.css'

export default class Input extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			focus: false,
		}
		this.handleFocus = this.handleFocus.bind(this)
		this.handleBlur = this.handleBlur.bind(this)
	}

	handleFocus(e) {
		if (this.props.onFocus) {
			this.props.onFocus(e)
		}
		this.setState({ focus: true })
	}

  handleBlur(e) {
    if (this.props.onBlur) {
			this.props.onBlur(e)
		}
		this.setState({ focus: false })
  }

	render(){
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
		} = this.props
		return (
			<label className={`inputWrapper ${focus ? 'inputFocus' : ''} ${error ? 'inputErr' : ''}`}>
				<span className={`inputLabel ${(value || focus) ? 'inputLabelMoved' : ''}`}>
					{label}
				</span>
				{mask && (
					<InputMask
						mask={mask}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
					>
						{(inputProps) => (
							<Field
								type={type || `text`}
								autoComplete={autoComplete}
								className='input'
								name={name}
                value={value || ''}
								{...inputProps}
							/>
						)}
					</InputMask>
				)}
				{!mask && (
					<Field
						type={type || `text`}
						autoComplete={autoComplete}
						name={name}
						className='input'
            value={value || ''}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
						checked={checked}
					/>
				)}
				{error && (
					<span className='inputErrMsg' data-error>{error}</span>
				)}
			</label>
		)
	}
}
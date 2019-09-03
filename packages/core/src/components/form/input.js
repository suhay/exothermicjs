import React from 'react'
import InputMask from 'react-input-mask'
import { Field } from 'formik'
import { StyleSheet, css } from 'aphrodite'

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
      <label className={`${css(styles.inputWrapper)} ${focus ? css(styles.inputFocus) : ``} ${error ? css(styles.inputErr) : ``}`}>
        <span className={`${css(styles.inputLabel)} ${(value || focus) ? css(styles.inputLabelMoved) : ``} ${required ? css(styles.requiredInput) : ``}`}>
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

const styles = StyleSheet.create({
  inputWrapper: {
    position: `relative`,
    display: `block`,
    marginTop: `30px`,
    fontSize: `.9em`,
    background: `transparent`,
    border: `1px solid #EFF0F0`,
    borderRadius: `4px`,
  },
  inputFocus: {
    border: `1px solid #666`,
  },
  inputErr: {
    color: `#f00`,
    border: `1px solid #f00`,
  },
  inputLabel: {
    position: `absolute`,
    top: `-18px`,
    left: 0,
    fontSize: `.85em`,
    display: `block`,
    opacity: `.75`,
    transition: `transform .2s`,
    transform: `translate(7px, 30px)`,
  },
  inputLabelMoved: {
    transform: `translate(0px, 0px)`,
  },
  input: {
    width: `100%`,
    display: `block`,
    background: `transparent`,
    border: 0,
    borderRadius: `4px`,
    fontSize: `16px`,
    padding: `0 10px`,
    height: `36px`,
    outline: `none`,
  },
  inputErrMsg: {
    position: `absolute`,
    display: `inline-block`,
    fontSize: `.75em`,
    right: 0,
    top: `42px`,
  },
  checkbox: {
    width: `20px`,
    height: `20px`,
    border: `1px solid #666`,
    position: `relative`,
    display: `inline-block`,
    userSelect: `none`,
    marginRight: `10px`,
    input: {
      display: `none`,
    },
  },
  checkboxChecked: {
    background: `#666`,
  },
  checkboxIcon: {
    color: `#fff`,
    position: `absolute`,
    left: `50%`,
    top: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  radio: {
    width: `20px`,
    height: `20px`,
    border: `1px solid #666`,
    position: `relative`,
    display: `inline-block`,
    userSelect: `none`,
    marginRight: `10px`,
    input: {
      display: `none`,
    },
  },
  radioChecked: {
    background: `#666`,
  },
  radioIcon: {
    color: `#fff`,
    position: `absolute`,
    left: `50%`,
    top: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  selectWrapper: {
    position: `relative`,
    display: `block`,
    marginTop: `30px`,
    fontSize: `.9em`,
    background: `#FFF`,
    border: `1px solid #EFF0F0`,
    borderRadius: `4px`,
  },
  select: {
    background: `transparent`,
    height: `36px`,
    position: `relative`,
    zIndex: 2,
    display: `block`,
    width: `100%`,
    fontSize: `16px`,
    border: 0,
    outline: `none`,
  },
  selectFocus: {
    border: `1px solid #666`,
  },
  selectErr: {
    color: `#f00`,
    border: `1px solid #f00`,
  },
  selectErrMsg: {
    position: `absolute`,
    display: `inline-block`,
    fontSize: `.75em`,
    right: 0,
    bottom: `-18px`,
  },
  selectLabel: {
    position: `absolute`,
    top: `-20px`,
    left: 0,
    fontSize: `.8em`,
    display: `block`,
    opacity: `.75`,
    transition: `transform .2s`,
    transform: `translate(7px, 32px)`,
    marginBottom: `5px`,
  },
  selectLabelMoved: {
    transform: `translate(0px, 0px)`,
  },
  clickableLabel: {
    cursor: `pointer`,
    display: `flex`,
    marginTop: `30px`,
    userSelect: `none`,
  },
  requiredInput: {
    ":after": {
      content: `*`,
      color: `#F00`,
    },
  },
})

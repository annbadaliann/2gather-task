import React from "react";

class InputField extends React.Component {
  state = {
    focus: {
      email: false,
      password: false
    }
  };

  onFocus = key => {
    this.setState({
      focus: {
        [key]: true
      }
    });
  };

  onBlur = (e, key) => {
    this.setState({
      focus: {
        [key]: e.target.value !== ""
      }
    });
  };

  render() {
    const { focus } = this.state;
    const {
      labelName,
      type,
      submitted,
      field,
      value,
      change,
      name
    } = this.props;

    console.log(name);
    return (
      <div className="G-field">
        <label
          className={`G-form-label  ${focus.email ? "G-label-animated" : ""}`}
          htmlFor="signin-email"
        >
          {labelName}
        </label>
        <input
          type={type}
          onChange={change}
          name={name}
          onFocus={() => this.onFocus("email")}
          onBlur={e => this.onBlur(event, "email")}
          className={submitted && !field ? "G-invalid-input" : ""}
          value={value}
        />

        <span
          className={`input-border ${
            focus.email ? "input-border-animated" : ""
          }`}
        ></span>
      </div>
    );
  }
}

export default InputField;

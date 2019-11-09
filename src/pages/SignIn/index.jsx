import React from "react";
import logo from "../../assets/images/2gather.jpg";
import { isValidEmail } from "../../platform/validatior";
import eyeIcon from "../../assets/images/close-eye.png";
import InputField from "./InputField";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import "./style.scss";

class SignIn extends React.Component {
  state = {
    form: {
      email: "",
      password: ""
    },
    focus: {
      email: false,
      password: false
    },
    passToggle: false,
    submitted: false
  };

  submit = async e => {
    e.preventDefault();
    const {
      form: { email, password }
    } = this.state;

    this.setState({
      submitted: true
    });

    if (isValidEmail(email) && password) {
      try {
        const response = await fetch("https://2.evollai.com/api/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            osType: 3
          }),
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": "*",
            language: 1
          }
        });
        const result = await response.json();
        if ((result, result.success)) {
          localStorage.setItem("authToken", result.data.authToken);
          window.routerHistory.push("/topic-suggestion");
        } else {
          NotificationManager.error(result.message);
        }
      } catch (error) {
        // console.log(error);
      }
    }
  };

  change = ({ target: { name, value } }) => {
    const { form } = this.state;
    form[name] = value;
    this.setState({ form });
    console.log(form.email, form.password);
  };

  togglePassword = () => {
    this.setState({
      passToggle: !this.state.passToggle
    });
  };

  render() {
    const { form, passToggle, submitted } = this.state;

    console.log(form.email, form.password);
    return (
      <div className="sign-in">
        <div className="sign-in-form">
          <div className="sign-in-form-container">
            <h2>Sign in</h2>
            <p>
              Enter your email and password and login in your <br /> account
            </p>
            <form>
              <div className="fields">
                <InputField
                  change={this.change}
                  labelName="Email"
                  name="email"
                  type="email"
                  field={isValidEmail(form.email)}
                  submitted={submitted}
                  value={form.email}
                />
                <div className="password-label">
                  <InputField
                    change={this.change}
                    labelName="Password"
                    name="password"
                    type={!passToggle ? "password" : "text"}
                    field={form.password}
                    submitted={submitted}
                    value={form.password}
                  />
                  <img
                    src={eyeIcon}
                    alt="closed"
                    onClick={this.togglePassword}
                  />
                </div>
              </div>

              <button className="G-button" onClick={this.submit}>
                Sign in
              </button>
            </form>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="2gather" />
        </div>
        <NotificationContainer enterTimeout={200} />
      </div>
    );
  }
}

export default SignIn;

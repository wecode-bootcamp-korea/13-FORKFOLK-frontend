import React, { Component } from "react";
import "./AccountForm.scss";
import "../../../styles/reset.scss";

const LoginAPI = "http://10.58.0.139:8000/my-account/signin";
const RegisterAPI = "http://10.58.0.139:8000/my-account/signup";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      IDInput: "",
      PWInput: "",
      LoginBtnEnabled: "",
    };
  }

  loginFunc = (event) => {
    event.preventDefault();
    const { IDInput, PWInput } = this.state;
    console.log(IDInput, PWInput);
    if (this.props.header === "Login") {
      fetch(LoginAPI, {
        method: "POST",
        body: JSON.stringify({
          email: IDInput,
          password: PWInput,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          localStorage.setItem("user-token", result.TOKEN);
        });
    } else {
      fetch(RegisterAPI, {
        method: "POST",
        body: JSON.stringify({
          email: IDInput,
          password: PWInput,
        }),
      })
        .then((response) => response.json())
        .then((result) => {});
    }
  };

  changeInputState = (event) => {
    const { value, name } = event.target;
    const { IDInput, PWInput } = this.state;
    const id = name === "IDInput" ? value : IDInput;
    const pw = name === "PWInput" ? value : PWInput;
    const isLoginValid = id.includes("@") && pw.length >= 5;
    this.setState({
      [name]: value,
      LoginBtnEnabled: isLoginValid || isEmailValid,
    });
  };

  render() {
    const { LoginBtnEnabled } = this.state;
    const { header, inputLable, checkBoxLable, buttonText, subText, subLink } = this.props;
    return (
      <form className="accountForm">
        <header>{header}</header>
        <span>{inputLable}</span>
        <input type="text" name="IDInput" onChange={this.changeInputState} />
        <span>Password *</span>
        <input type="password" name="PWInput" onChange={this.changeInputState} />
        <div>
          <input type="checkbox" />
          <span>{checkBoxLable}</span>
        </div>
        <button className={LoginBtnEnabled ? "activated" : "deactivated"} onClick={this.loginFunc}>
          {buttonText}
        </button>
        <span className="subText">
          {subText}
          <span className="subLink">{subLink}</span>
        </span>
      </form>
    );
  }
}

export default Account;

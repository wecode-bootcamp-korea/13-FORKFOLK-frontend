import React, { Component } from "react";
import "./AccountForm.scss";
import "../../../styles/reset.scss";
import { LoginAPI, RegisterAPI } from "../../../config";

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
    const isLogin = this.props.header === "Login";
    const options = {
      method: "POST",
      body: JSON.stringify({
        email: IDInput,
        password: PWInput,
      }),
    };

    const fetchAccount = async (url, options, callback) => {
      const res = await fetch(url, options);
      const json = await res.json();
      callback(json);
    };

    if (isLogin)
      fetchAccount(LoginAPI, options, (result) => {
        this.props.postError(result.message);
        if (result.message === "SUCCESS") {
          localStorage.setItem("user-token", result.TOKEN);
          this.props.goToMain();
        }
      });
    else
      fetchAccount(RegisterAPI, options, (result) => {
        this.props.postError(result.message);
      });
  };

  changeInputState = (event) => {
    const { value, name } = event.target;
    const { IDInput, PWInput } = this.state;
    const id = name === "IDInput" ? value : IDInput;
    const pw = name === "PWInput" ? value : PWInput;
    const isLoginValid = id.includes("@") && pw.length >= 5;
    this.setState({
      [name]: value,
      LoginBtnEnabled: isLoginValid,
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

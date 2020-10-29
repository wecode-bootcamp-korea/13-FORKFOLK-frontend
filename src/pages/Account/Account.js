import React, { Component } from "react";
import "./Account.scss";
import AccountForm from "./AccountForm/AccountForm";
import "../../styles/reset.scss";

const FORM_LABELS = [
  {
    header: "Login",
    inputLable: "Username or email address *",
    checkBoxLable: "Remember me",
    buttonText: "Log in",
    subText: "",
    subLink: "Lost your password?",
  },
  {
    header: "Register",
    inputLable: "Email address *",
    checkBoxLable: "Subscribe to our newsletter",
    buttonText: "Register",
    subText:
      "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our ",
    subLink: "privacy policy.",
  },
];

class Account extends Component {
  constructor() {
    super();
    this.state = {
      errorMessege: "",
    };
  }

  setErrorMessege = (errorCode) => {
    this.setState({ errorMessege: errorCode });
  };

  goToMain = () => {
    this.props.history.push("/");
  };

  render() {
    const { errorMessege } = this.state;
    return (
      <div className="Account">
        <header>My Account</header>
        <div className={errorMessege ? "errorContainer showing" : "errorContainer"}>
          {errorMessege}
        </div>
        <section>
          {FORM_LABELS.map((el) => (
            <AccountForm
              header={el.header}
              inputLable={el.inputLable}
              checkBoxLable={el.checkBoxLable}
              buttonText={el.buttonText}
              subText={el.subText}
              subLink={el.subLink}
              postError={this.setErrorMessege}
              goToMain={this.goToMain}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Account;

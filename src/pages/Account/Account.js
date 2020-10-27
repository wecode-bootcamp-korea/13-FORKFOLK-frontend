import React from "react";
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

function Account() {
  return (
    <div className="Account">
      <header>My Account</header>
      <section>
        {FORM_LABELS.map((el) => (
          <AccountForm
            header={el.header}
            inputLable={el.inputLable}
            checkBoxLable={el.checkBoxLable}
            buttonText={el.buttonText}
            subText={el.subText}
            subLink={el.subLink}
          />
        ))}
      </section>
    </div>
  );
}

export default Account;

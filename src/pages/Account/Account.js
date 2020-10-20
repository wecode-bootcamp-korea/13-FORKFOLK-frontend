import React, { Component } from 'react'
import './Account.scss';
import AccountForm from './AccountForm/AccountForm'
import '../../styles/reset.scss';

class Account extends Component {
    constructor() {
        super();
        this.state = {
            loginFormLabels: {
                header: "Login",
                inputLable: "Username or email address *",
                checkBoxLable: "Remember me",
                buttonText: "Log in",
                subText : "",
                subLink: "Lost your password?",
            },
            registerFormLabels: {
                header: "Register",
                inputLable: "Email address *",
                checkBoxLable: "Subscribe to our newsletter",
                buttonText: "Register",
                subText : "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our ",
                subLink: "privacy policy.",
            }
        }
    }
    render() {
        const { loginFormLabels, registerFormLabels } = this.state;
        return (
            <div className='Account'>
                <header>My Account</header>
                <section>
                    <AccountForm header={loginFormLabels.header} inputLable={loginFormLabels.inputLable} checkBoxLable={loginFormLabels.checkBoxLable} buttonText ={loginFormLabels.buttonText} subText ={loginFormLabels.subText}  subLink ={loginFormLabels.subLink} />
                    <AccountForm header={registerFormLabels.header} inputLable={registerFormLabels.inputLable}checkBoxLable={registerFormLabels.checkBoxLable} buttonText ={registerFormLabels.buttonText} subText ={registerFormLabels.subText} subLink ={registerFormLabels.subLink} />
                </section>
            </div>
        )
    }
}

export default Account

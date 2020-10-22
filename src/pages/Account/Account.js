import React, { Component } from 'react'
import './Account.scss';
import AccountForm from './AccountForm/AccountForm'
import '../../styles/reset.scss';

const LOGINFORM_LABELS = {
    header: "Login",
    inputLable: "Username or email address *",
    checkBoxLable: "Remember me",
    buttonText: "Log in",
    subText : "",
    subLink: "Lost your password?",
}
const RESISTERFORM_LABELS = {
    header: "Register",
                inputLable: "Email address *",
                checkBoxLable: "Subscribe to our newsletter",
                buttonText: "Register",
                subText : "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our ",
                subLink: "privacy policy.",
}

function Account () {
        return (
            <div className='Account'>
                <header>My Account</header>
                <section>
                    <AccountForm header={LOGINFORM_LABELS.header} inputLable={LOGINFORM_LABELS.inputLable} checkBoxLable={LOGINFORM_LABELS.checkBoxLable} buttonText ={LOGINFORM_LABELS.buttonText} subText ={LOGINFORM_LABELS.subText}  subLink ={LOGINFORM_LABELS.subLink} />
                    <AccountForm header={RESISTERFORM_LABELS.header} inputLable={RESISTERFORM_LABELS.inputLable}checkBoxLable={RESISTERFORM_LABELS.checkBoxLable} buttonText ={RESISTERFORM_LABELS.buttonText} subText ={RESISTERFORM_LABELS.subText} subLink ={RESISTERFORM_LABELS.subLink} />
                </section>
            </div>
        )
}

export default Account

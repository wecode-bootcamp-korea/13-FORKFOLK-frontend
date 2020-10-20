import React, { Component } from 'react'
import './AccountForm.scss';
import '../../../styles/reset.scss';

const LoginAPI = "";
const RegisterAPI = "";

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
                    account: IDInput,
                    password: PWInput,
                }),
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result.MESSAGE);
                });
        }
        else {
            fetch(RegisterAPI, {
                method: "POST",
                body: JSON.stringify({
                    account: IDInput,
                    password: PWInput,
                }),
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result.MESSAGE);
                }); 
        }
      };

    handleInputChange = async (event) => {
        const { value, name } = event.target;  
        await this.setState({ [name]: value });
        const { IDInput, PWInput } = this.state;
        let isLoginFormValid = false;
        if (this.props.header === "Login") {isLoginFormValid = PWInput.length >= 5 && PWInput.length >= 5; }
        else{isLoginFormValid = IDInput.includes("@") && PWInput.length >= 5; }
        this.setState({ LoginBtnEnabled : isLoginFormValid });
    };
    
    render() {
        const { LoginBtnEnabled } = this.state;
        const { header, inputLable, checkBoxLable, buttonText, subText, subLink } = this.props;
        return (
             <form className='accountForm'>
                <header>{header}</header>
                <span>{inputLable}</span>
                <input type="text" name="IDInput" onChange={this.handleInputChange}/>
                <span>Password *</span>
                <input type="password"  name="PWInput" onChange={this.handleInputChange}/>
                 <div>
                     <input type="checkbox" />
                     <span>{checkBoxLable}</span>
                </div>
                <button 
                  className={LoginBtnEnabled ? "activated" : "deactivated"}
                  onClick={this.loginFunc}>{buttonText}</button>
                <span className="subText">{subText}<span className="subLink">{subLink}</span></span>
             </form>
        )
    }
}

export default Account

import React, { Component } from 'react';
import './Login.css';
import {FormErrors} from './FormErrors';
class Login extends Component {
    constructor(){
        super();
        this.state ={
            email:'',
            password:'',
            formErrors: {email: '',password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
        
    }
    handleUserInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value},
            ()=>{this.validateField(name, value)});
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
     }
    render() {
        return (
        <div id="login">
            <div className="box-shadow col-md-4 mx-auto">
                <form className="form-login demoForm">
                    <input type="text" id="fname" className="form-control" placeholder="Enter email" value = {this.state.email} onChange={(event) => this.handleUserInput(event)}/>
                    <input type="password" id="pass" className="form-control" placeholder="Password" value = {this.state.password} onChange={(event) => this.handleUserInput(event)}/>
                    <button type="submit" className="btn btn-green w-100" >Login</button>
                    <h6 className="small">Not registered <a href className="new-account text-green" disabled={!this.state.formValid}>Create an account</a> </h6> 
                </form>
            </div>
            <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className={`form-group
                 ${this.errorClass(this.state.formErrors.email)}`}></div>
        </div>
          
        )
      }
}
export default  Login;
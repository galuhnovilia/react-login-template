import React, { Component } from 'react';
import './Login.css';
import LoginForm from './LoginForm';

class Login extends Component {

    render() {
        return (
        <div id="login">            
            <div className="box-shadow col-md-4 mx-auto">            
                <form className="form-login demoForm">
                    <h2>Sign up</h2>

                    <LoginForm buttonName="Submit"/>
                    
                </form>
            </div>
            
        </div>
          
        )
      }
}




export default  Login;
import React, { Component } from 'react';
import Input from './Input';

class LoginForm extends Component{
    constructor(props){
      super(props)
      this.state={
        username: "",
        password: ""
      }
      this.clickHandler = this.clickHandler.bind(this)
      this.setUsername  = this.setUsername.bind(this)
      this.setPassword     = this.setPassword.bind(this)
      
    }
  
    setUsername(username) {
      this.setState({username:username})
    }
    setPassword(password) {
      this.setState({password:password})
    }
    clickHandler(){
      alert(`Username : ${this.state.username} Password: ${this.state.password}`)
    }
  
    render() {
      return(
        <div>
          <div className="wrap-input">
            <Input id ="username" labelName="Username " inputType="text" parentFunction={this.setUsername}  />
          </div>
          <div className="wrap-input">
              <Input id ="password" labelName="Password " inputType="password" parentFunction={this.setPassword} /> 
          </div>
          <button className="btn btn-green" onClick={this.clickHandler}>{this.props.buttonName}</button>
        </div>
      )
    }
  }
  export default  LoginForm;
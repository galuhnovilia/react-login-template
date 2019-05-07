import React, { Component } from 'react';
import './Login.css';

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

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
    
  changeHandler(e) {
    this.props.parentFunction(e.target.value)
  }
  
  render() {
    return (
      <div>
        {/* <label>{this.props.labelName}</label> */}
        <input type={this.props.inputType} id={this.props.id} onChange={this.changeHandler} className="form-control input-lg" placeholder={this.props.labelName}/>
      </div>
    )
  }
}


export default  Login;
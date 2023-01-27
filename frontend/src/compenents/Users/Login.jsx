import {Component } from 'react'
import React from 'preact/compat';
import axios from 'axios'
import withNavigateHook from './withNavigateHook';
import secureLocalStorage from 'react-secure-storage'
import Header from '../Header';
import { json } from 'react-router-dom';
 class Login extends Component {
constructor(props) {
  super(props);
  this.state={
    email:"",
    mdp:"",
  }
  this.handeleSubmit = this.handeleSubmit.bind(this)
}

async handeleSubmit(e){
  e.preventDefault()
  const {email, mdp } = this.state

  localStorage.setItem("email",email)
  secureLocalStorage.setItem("mdp",mdp)
    
  await axios.post('http://localhost:5000/signin/login', {
    email: this.state.email,
    mdp: this.state.mdp
  }).then((res) => {    
    this.props.navigation("/calendar")
    localStorage.setItem("user",JSON.stringify(res.data))  
    console.log(res.data)
    
  }).catch((err) => {
    console.log(err)
    
  });

}



render(){
    return(
      <>
      <React.Fragment>
			<Header/>
		</React.Fragment>
    <div className="Auth-form-container App ">
      <form className="Auth-form" onSubmit={this.handeleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">SIGN IN</h3>
          <div className="form-group mt-3">
         
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              
              onChange={(e)=>this.setState({email:e.target.value})}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              
              onChange={(e)=>this.setState({mdp:e.target.value})}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"
           >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
          <p className="forgot-password text-right mt-2">
          </p>
        </div>
      </form>
    </div>
      </>
    )
    
  }

}



export default withNavigateHook(Login)
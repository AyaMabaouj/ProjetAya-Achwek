import { Component } from 'react'
import axios from 'axios'
import withNavigateHook from './withNavigateHook';
import Header from '../Header';
import React from 'preact/compat';

 class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      email:"",
      mdp:"",
      conf:"",

    }
    this.handeleSubmit = this.handeleSubmit.bind(this)
    this.faireRedirection = this.faireRedirection.bind(this)
  }
  
  faireRedirection() {

  }
  async handeleSubmit(e){
    e.preventDefault()
    const {name, email, mdp ,conf} = this.state
    console.log(name, email, mdp, conf)
    if (mdp !== conf) {
    } else {
      
      await axios.post('http://localhost:5000/signup/register', {
      name: this.state.name,
      email: this.state.email,
      mdp: this.state.mdp,
    }).then((res) => {   
      this.props.navigation("/login")     
      console.log(res)
      
       
      
    }).catch((err) => {
      console.log(err)
      
    });
  }
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
          <h3 className="Auth-form-title">SIGN UP</h3>
         
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter your Name"
              onChange={(e)=>this.setState({name : e.target.value})}
            />
          </div>
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
          <div className="form-group mt-3">
            <label>Confirm</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter confirm"
              onChange={(e)=>this.setState({conf:e.target.value})}

            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
         
        </div>
      </form>
    </div>
      </>
  )
 
}
}
export default withNavigateHook(SingUp)
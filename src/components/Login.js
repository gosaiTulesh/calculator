import React from 'react';
import './Login.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

 
  render() {
    return (
      <div className="login">
          <span className="loginUser">Login user</span>
          <input type="text" placeholder="Enter Username" onChange={(e) => this.props.userChange(e.target.value)} />
          <button className="loginBtn" onClick={this.props.loginUser}>Login</button>
      </div>
    )
  }
}
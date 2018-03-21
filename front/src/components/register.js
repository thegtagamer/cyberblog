import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <input type="text" placeholder="Name" onChange={this.handleNameChange.bind(this)}/>
        <input type="text" placeholder="Email" onChange={this.handleEmailChange.bind(this)}/>
        <input type="text" placeholder="Username" onChange={this.handleUsernameChange.bind(this)}/>
        <input type="password" placeholder="password" onChange={this.handlePasswordChange.bind(this)}/>
        <button onClick={this.register.bind(this)}>Register</button>
      </div>
    );
  }

  handleUsernameChange(e){
    this.setState({ username:e.target.value });
  }

  handlePasswordChange(e){
    this.setState({ password: e.target.value });
  }

  handleEmailChange(e){
    this.setState({ email:e.target.value });
  }

  handleNameChange(e){
    this.setState({ name: e.target.value });
  }

  async register(){
    const result = await axios.post('http://localhost:4000/users/register', this.state);
    if(result.data.success){
      this.props.history.push('/users/login');
    }
  }

  constructor(props){
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  }
}

export default Register;
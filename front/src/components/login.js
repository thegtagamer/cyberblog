import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  render() {
    return (
      <div className="form-signin">
        <h1>Login</h1>
        <input type="text" className="form-control" placeholder="Username" onChange={this.handleUsernameChange.bind(this)}/>
        <input type="password" className="form-control" placeholder="password" onChange={this.handlePasswordChange.bind(this)}/>
        <button className="btn btn-lg btn-primary btn-block" onClick={this.login.bind(this)}>Login</button>
        { this.state.error }
      </div>
    );
  }

  handleUsernameChange(e){
    this.setState({ username:e.target.value });
  }

  handlePasswordChange(e){
    this.setState({ password: e.target.value });
  }

  async login(){
    const result = await axios.post('http://localhost:4000/users/login', this.state);
    console.log(result);
    if(result.data.success){
      localStorage.setItem('access_token', `Bearer ${result.data.data}`);
      this.props.history.push('/posts/new');
    }else{
      this.setState({ error: 'Something went wrong' });
    }
  }

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }
}

export default Login;
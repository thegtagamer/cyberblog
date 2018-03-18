import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { HashRouter, Route, Switch } from 'react-router-dom';

class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={this.state.username} onChange={ this.handleUsernameChange.bind(this) } />
        <input type="password" placeholder="password" value={this.state.password} onChange={ this.handlePasswordChange.bind(this) } />
        <button onClick={this.login.bind(this)}>Login</button>
      </div>
    )
  }

  handleUsernameChange(e){
    this.setState({ username:e.target.value });
  }

  handlePasswordChange(e){
    this.setState({ password: e.target.value });
  }

  login() {
    console.log(this.state);
  }
}

class Register extends Component{
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
    )
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

  register(){
    console.log(this.state);
  }
}

class UserName extends Component{
  render() {
    return (
      <div>
        Username: { this.state.username }<br />
        Email: { this.state.email }<br />
        Name: { this.state.name }<br />
      </div>
    )
  }

  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      name: ''
    }
  }

  async componentDidMount() {
    const data = await axios.get(`http://localhost:3000/users/${this.props.match.params.username}`);
    this.setState({username: data.data.data.username});
    this.setState({ email: data.data.data.email });
    this.setState({ name: data.data.data.name });
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/users/login' component={Login}/>
      <Route path='/users/register' component={Register}/>
      <Route path='/users/:username' component={UserName}/>
    </Switch>
  </main>
)


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Main />
      </HashRouter>
    );
  }
}

export default App;

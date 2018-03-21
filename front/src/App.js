import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './components/register';
import Login from './components/login';
import NewPost from './components/newPost';
import Post from './components/post';

const Main = () => (
  <main>
    <Switch>
      <Route path='/users/register' component={Register}/>
      <Route path='/users/login' component={Login}/>
      <Route path='/posts/new' component={NewPost}/>
      <Route path='/posts/:id' component={Post}/>
    </Switch>
  </main>
)


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;

// class UserName extends Component{
//   render() {
//     return (
//       <div>
//         Username: { this.state.username }<br />
//         Email: { this.state.email }<br />
//         Name: { this.state.name }<br />
//       </div>
//     )
//   }

//   constructor(props){
//     super(props);
//     this.state = {
//       username: '',
//       email: '',
//       name: ''
//     }
//   }

//   async componentDidMount() {
//     const data = await axios.get(`http://localhost:3000/users/${this.props.match.params.username}`);
//     this.setState({username: data.data.data.username});
//     this.setState({ email: data.data.data.email });
//     this.setState({ name: data.data.data.name });
//   }
// }
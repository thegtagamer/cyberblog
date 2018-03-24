import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/mainpage';
import Register from './components/register';
import Login from './components/login';
import UserName from './components/getUsers';
import NewPost from './components/newPost';
import Post from './components/post';

const Main = () => (
  <main>
    <Switch>
    <Route path='/index.html' component={MainPage}/>
      <Route path='/users/register' component={Register}/>
      <Route path='/users/login' component={Login}/>
      <Route path='/posts/new' component={NewPost}/>
      <Route path='/posts/:id' component={Post}/>
      <Route path='/users/:username' component={UserName}/>
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
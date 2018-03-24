import React, { Component } from 'react';
import axios from 'axios';

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
      const data = await axios.get(`http://localhost:4000/users/${this.props.match.params.username}`);
      console.log(data);
      this.setState({username: data.data.data.username});
      this.setState({ email: data.data.data.email });
      this.setState({ name: data.data.data.name });
    }
  }

  
export default UserName;
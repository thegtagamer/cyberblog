import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component{
  render() {
    return (
      <div>
        title: { this.state.title }<br />
        body: <div dangerouslySetInnerHTML={{__html: this.state.body}} />
      </div>
    );
  }

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  async componentDidMount(){
    const result = await axios.get(`http://localhost:4000/post/${this.props.match.params.id}`, {
      headers: {
        authorization: localStorage.getItem('access_token')
      }
    });
    this.setState({ 'title': result.data.data.title, 'body': result.data.data.body });
  }
}

export default Post;
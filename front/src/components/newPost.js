import React, { Component } from 'react';
import axios from 'axios';

class NewPost extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Title" onChange={this.handleTitleChange.bind(this)}/>
        <input type="text" placeholder="Body" onChange={this.handleBodyChange.bind(this)}/>
        <button onClick={this.submit.bind(this)}>submit</button>
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

  handleTitleChange(e){
    this.setState({ title:e.target.value });
  }

  handleBodyChange(e){
    this.setState({ body: e.target.value });
  }

  async submit(){
    const result = await axios.post('http://localhost:4000/post/new', this.state, {
      headers: {
        authorization: localStorage.getItem('access_token')
      }
    });
    if(result.data.success){
      this.props.history.push(`/posts/${result.data.data._id}`);
    }
  }
}

export default NewPost;
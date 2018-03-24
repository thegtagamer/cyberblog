import React, { Component } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill'; 

class NewPost extends Component {
  render() {
    return (
      <div className="col-md-12">
       <h2>Write a new article</h2>
      
          <div className="form-area">  
              
                <br styles="clear:both" />
                <div className="form-group">
                <input type="text" className="form-control" placeholder="What would you like to call me?" onChange={this.handleTitleChange.bind(this)}/>
                </div>
               
                <div className="form-group">
                <ReactQuill 
                  onChange={this.handleBodyChange.bind(this)} value={this.state.body}/>

                </div>
              

                <button id="submit" name="submit" className="btn btn-lg btn-primary btn-block" onClick={this.submit.bind(this)}>submit</button>
                  
               
             
          </div>
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
    this.setState({ body: e });
    console.log(this.state.body)
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
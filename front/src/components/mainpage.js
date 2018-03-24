import React, { Component } from 'react';
class Mainpage extends Component {
  render() {
      return(
      
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-preview">
              <a href="post.html">
                <h2 class="post-title">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3 class="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </a>
              <p class="post-meta">Posted by
                <a href="#">Start Bootstrap</a>
                on September 24, 2018</p>
            </div>
            <hr />
            <div class="post-preview">
              <a href="post.html">
                <h2 class="post-title">
                  Failure is not an option
                </h2>
                <h3 class="post-subtitle">
                  Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                </h3>
              </a>
              <p class="post-meta">Posted by
                <a href="#">Start Bootstrap</a>
                on July 8, 2018</p>
            </div>
            <hr />
           
            <div class="clearfix">
              <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
          </div>
        </div>
     
    
    );
  /*  return (

      <!--<div className="form-signin">
        <h1>Login</h1>
        <input type="text" className="form-control" placeholder="Username" onChange={this.handleUsernameChange.bind(this)}/>
        <input type="password" className="form-control" placeholder="password" onChange={this.handlePasswordChange.bind(this)}/>
        <button className="btn btn-lg btn-primary btn-block" onClick={this.login.bind(this)}>Login</button>
        { this.state.error }
      </div>-->
    );*/

  }

  
}

export default Mainpage;
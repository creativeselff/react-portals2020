import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './style.css';

class Profile extends Component {
  render () {
    
    const { name, bio, email } = this.props

    return (
      <div>
      <h1>{ name }</h1>
      <p>{ bio }</p>
      <a href = {`mailto:${email}`}>
      { email } 
      </a>
      </div>
    )
  }
}



class App extends Component {
  
  render() {
    return (
      <div>
      <Profile 
      name='James Cameron'
      bio= 'Holywood Actor'
      email= 'my-email@mail.com'
      />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

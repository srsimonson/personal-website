import React, { Component } from 'react';
const image = require("/Users/srsimonson/Documents/DEV/personal_website/src/images/NameOutline.png")

class Home extends Component {
    // Renders the entire app on the DOM
    render() {
      return (
        <div>
          <h1>Home</h1>
          <img src={ image } className="outline"/>
        </div>
      );
    }
  }
  
  export default Home;
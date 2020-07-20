import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Home.scss';
const image = require("/Users/srsimonson/Documents/DEV/personal_website/src/images/NameOutline.png")

class Home extends Component {
    // Renders the entire app on the DOM
    render() {
      return (
        <>
        <Navigation/>
        <div className="home">
            <div className="name-outline-container">
                <img src={ image } className="NameOutline"/>
            </div>
        </div>
        </>
      );
    }
  }
  
  export default Home;
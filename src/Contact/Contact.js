import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './Contact.scss'

class Contact extends Component {
    // Renders the entire app on the DOM
    render() {
      return (
        <div id="contact">
            <Navigation/>
            <h1>Contact</h1>
            <p>work in progress</p>
            <ul>
                <li>srsimonson@gmail.com</li>
                <li>github.com/srsimonson</li>
                <li>linkedin.com/in/steve-simonson/</li>
            </ul>
        </div>
      );
    }
  }
  
  export default Contact;
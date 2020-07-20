import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './About.scss';


class About extends Component {
    // Renders the entire app on the DOM
    render() {
      return (
        <div id="about">
            <Navigation/>
            <div id="text">
                <h4>Hello!</h4>
                    <p>Longtime creatively driven hobbyist: painting, screenwriting, ceramics, videography and editing, homebrewing.</p>
                    <p>Motivated to immerse myself in software engineering and web development to find that link between my creative self and professional self. </p>
                <h4>Steve Simonson</h4>
            </div>
        </div>
      );
    }
  }
  
  export default About;
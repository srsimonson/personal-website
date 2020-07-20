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
                    <p>Creatively driven hobbyist: painting, screenwriting, ceramics, videography and editing, homebrewing. Lifelong passion for exploring new mediums to express my creativity.</p>
                    <p>Motivated to immerse myself in software engineering and web development to find and nurture the relationship between my imaginative self and professional self. </p>
                    <p>Career goal is to leverage my 15 years in the human services field to foster the connection between tech and the individual, and advocate for the human element within the technology itself and the field as a whole.</p>
                <h4>Steve Simonson</h4>
            </div>
        </div>
      );
    }
  }
  
  export default About;
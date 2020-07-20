import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './Gallery.scss'

class Gallery extends Component {
    // Renders the entire app on the DOM
    render() {
      return (
        <div id="gallery">
            <Navigation/>
            <h1>Gallery</h1>
        </div>
      );
    }
  }
  
  export default Gallery;
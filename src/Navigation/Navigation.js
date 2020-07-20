import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
    <div className="nav-div">
        <ul className="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Me</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
</div>
);

export default (Navigation);
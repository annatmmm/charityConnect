import React from 'react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div class="top_navigation">
            <Link to="/"><img src={logo} class="center"/></Link>
            <Link to="/">Service Search</Link>
            <Link to="/">For Volunteer</Link>
            <Link to="/">For Organization</Link>
        </div>
    );
}

export default NavigationBar;
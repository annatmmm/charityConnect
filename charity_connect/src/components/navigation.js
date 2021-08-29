import logo from '../assets/logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Router>
            <div class="top_navigation">
                <a><img src={logo} class="center"/> </a>
                <a href="/">Service Search</a>
                <a href="/">For Volunteer</a>
                <a href="/">For Organization</a>
            </div>
        </Router>
    );
}

export default NavigationBar;
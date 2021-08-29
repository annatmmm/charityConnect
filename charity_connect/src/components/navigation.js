import logo from '../assets/logo.png';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


  
  const AboutPage = () => {
    return <h3>About Page</h3>;
  };

const NavigationBar = () => {
    return (
        <Router>
        <div class="top_navigation">
        <a><img src={logo} class="center"/> </a>
        <Link to="/">Service Search</Link>
        <Link to="/volunteer">For Volunteer</Link>
        <Link to="/organization">For Organization</Link>
        </div>
        </Router>
    );
}

export default NavigationBar;
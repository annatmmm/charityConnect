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
                <Link to="/">ADD ICON</Link>
                <Link to="/">Service Search</Link>
                <Link to="/">For Volunteer</Link>
                <Link to="/">For Organization</Link>
            </div>
        </Router>
    );
}

export default NavigationBar;
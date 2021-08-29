import logo from '../assets/logo.png'
const NavigationBar = () => {
    return (
        <div class="top_navigation">
        <a><img src={logo} class="center"/> </a>
        <a href="/Result.js">Service Search</a>
        <a href="/">For Volunteer</a>
        <a href="/">For Organization</a>
        </div>
    );
}

export default NavigationBar;
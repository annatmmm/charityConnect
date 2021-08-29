import React from 'react';
import NavigationBar from '../components/navigation';
import LoginForm from '../components/login';

const OrganizationSignInPage = () => {
    return (
        <div className="App">
            <NavigationBar/>
            <div className="login_box">
                <div className="login_title">
                    <text>
                        Admin sign in
                    </text>
                </div>
                <p>Please log in with your admin username and password</p>
                <LoginForm/>
                <p>Forgot Password? Contact us!</p>
            </div>
        </div>
    );
}

export default OrganizationSignInPage;
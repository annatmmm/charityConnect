import './login.css'

const sign_in = async event => {
    event.preventDefault()
    alert("NOT IMPLEMENTED")
}

const LoginForm = () => {
    return (
        <form className="login_form">
            <input className="input_log" id="user_name" type='text' placeholder='Email'/>
            <br/>
            <input className="input_log" id="user_email" type='password' placeholder='Password'/>
            <br/>
            <button className="submit_log" id="user_info_submit" type="submit" onClick={sign_in}>
                Log in
            </button>
        </form>
    );
}

export default LoginForm;
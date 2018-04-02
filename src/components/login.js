import React, { Component } from 'react';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import Button from 'react-toolbox/lib/button/Button';
import LoginForm from './loginForm';
import SignupForm from './signupForm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginToggle: false,
            signupToggle: false,
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(toggle) {
        this.setState({ [toggle]: !this.state[toggle] })
    }
    render() {
        const { loginToggle, signupToggle } = this.state;
        const toggleLogin = () => this.toggle("loginToggle");
        const toggleSignup = () => this.toggle("signupToggle");
        return (
            <div style = {{textAlign: "center", justifyContent: "center", marginTop: "35vh"}}>
                <h1>Divebook Application</h1>
                <div style={{ width: "20%", margin: "auto" }}>
                    <Button style={{ width: "100%", margin: "2%" }} label="Sign Up" raised primary onClick={toggleSignup} />
                    <Button style={{ width: "100%", margin: "2%" }} label="Log in" raised primary onClick={toggleLogin} />
                    <Dialog
                        active={signupToggle}
                        onEscKeyDown={toggleSignup}
                        onOverlayClick={toggleSignup}
                        type="normal"
                    >
                        <SignupForm onSuccess={toggleSignup}/>
                    </Dialog>
                    <Dialog
                        active={loginToggle}
                        onEscKeyDown={toggleLogin}
                        onOverlayClick={toggleLogin}
                        type="normal"
                    >
                        <LoginForm/>
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default Login;
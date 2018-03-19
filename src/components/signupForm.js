import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

import { signUp } from './../api';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
            errorMessage: null,
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    submit() {
        const { email, password } = this.state;
        const emailError = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[A-Za-z]+)+$/.test(email) ? null : "E-mail is invalid";
        const passwordError = password.length < 8 ? "Password should contain at least 8 character" : null;
        this.setState({ emailError, passwordError });

        if (!emailError && !passwordError) {
            signUp(email, password)
                .then(() => this.props.onSuccess())
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    render() {
        const { email, emailError, password, passwordError, errorMessage } = this.state;
        return (
            <div className="LoginForm" style={{ textAlign: 'center', justifyContent: 'center' }} onChange={this.handleChange.bind(this)}>
                <div style={{ display: !!errorMessage, color: 'red' }}><em>{errorMessage}</em></div>
                <Input type='text' label='E-mail' name='email' value={email} error={emailError} />
                <Input type='password' label='Password' name='password' value={password} error={passwordError} />
                <Button onClick={this.submit} label="Sign Up" primary />
            </div>
        );
    }
}

export default SignupForm
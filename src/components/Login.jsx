import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

import Input from './Input';

import './login.css';

const Login = (props) => {

    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    });

    const onLoginChange = (newState) => {
        setLoginDetails({...loginDetails, ...newState});
    };

    return (
        <>
            <h1>Login</h1>
            <section id="login">
                <form>
                    <Input id="username" onChange={onLoginChange} value={loginDetails.username} label="username"/>
                    <Input id="password" onChange={onLoginChange} value={loginDetails.password} label="password"
                           type="password"/>
                    <button type="submit" onClick={props.submit}>LOGIN</button>
                </form>
                <div>
                    <span>not a member ?&nbsp;</span>
                    <NavLink to="/register">register</NavLink>
                </div>
            </section>
        </>
    );
};

export default Login;
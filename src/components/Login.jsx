import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Input from './Input';
import AuthLayout from './AuthLayout';

const Login = (props) => {

    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    });

    const onLoginChange = (newState) => {
        setLoginDetails({ ...loginDetails, ...newState });
    };

    return (
        <AuthLayout name="login">
            <Input id="username" onChange={onLoginChange} value={loginDetails.username} label="username"/>
            <Input id="password" onChange={onLoginChange} value={loginDetails.password} label="password"
                   type="password"/>
            <button>Login</button>
        </AuthLayout>
    );
};

export default Login;
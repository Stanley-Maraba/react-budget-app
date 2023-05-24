import React, { useState } from 'react';

import Input from './Input';
import AuthLayout from './AuthLayout';
import Button from './Button';

const Login = () => {

    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    });

    const onLoginChange = (newState) => {
        setLoginDetails({ ...loginDetails, ...newState });
    };

    return (
        <AuthLayout header="login" linkUrl="/register" linkText="not a member?">
            <Input id="username" onChange={onLoginChange} value={loginDetails.username} label="username"/>
            <Input id="password" onChange={onLoginChange} value={loginDetails.password} label="password"
                   type="password"/>
            <Button name ='Login'/>
        </AuthLayout>
    );
};

export default Login;
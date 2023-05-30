import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../auth/auth.actions.js';
import { useNavigate } from 'react-router-dom';

import Input from './Input';
import AuthLayout from './AuthLayout';
import Button from './Button';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    });

    const onLoginChange = (newState) => {
        setLoginDetails({ ...loginDetails, ...newState });
    };

    const handleClick = () => {
        dispatch(getUser(loginDetails, navigate));
    };

    return (
        <AuthLayout header="login" linkUrl="/register" linkText="not a member?">
            <Input id="username" onChange={onLoginChange} value={loginDetails.username} label="username"/>
            <Input id="password" onChange={onLoginChange} value={loginDetails.password} label="password"
                   type="password"/>
            <Button name="Login" type='button' onClick={handleClick}/>
        </AuthLayout>
    );
};

export default Login;
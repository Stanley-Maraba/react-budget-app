import React, { useState } from 'react';

import Input from './Input';
import AuthLayout from './AuthLayout';

const Register = () => {
    const [registerDetails, setRegisterDetails] = useState({
        username: '',
        password: '',
        income: ''
    });

    const onRegisterChange = (newState) => {
        setRegisterDetails({ ...registerDetails, ...newState });
    };

    return (
        <AuthLayout name='register'>
            <Input id="username" onChange={onRegisterChange} value={registerDetails.username} label="username"/>
            <Input id="income" onChange={onRegisterChange} value={registerDetails.income} label="income"/>
            <Input id="password" onChange={onRegisterChange} value={registerDetails.password} label="password"
                   type="password"/>
        </AuthLayout>
    );
};

export default Register;
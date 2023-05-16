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
        <AuthLayout header="register" linkUrl="/login" linkText="already a member ? ">
            <Input id="username" onChange={onRegisterChange} value={registerDetails.username} label="username"/>
            <Input id="password" onChange={onRegisterChange} value={registerDetails.password} label="password"
                   type="password"/>
            <button>Register</button>
        </AuthLayout>
    );
};

export default Register;
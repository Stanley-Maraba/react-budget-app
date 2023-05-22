import React, { useState } from 'react';

import Input from './Input';
import AuthLayout from './AuthLayout';
import Button from './Button';

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
            <Button name="REGISTER"/>
        </AuthLayout>
    );
};

export default Register;
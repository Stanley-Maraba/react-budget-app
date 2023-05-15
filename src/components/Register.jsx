import React, { useState } from 'react';

import Input from './Input';

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

        <>
            <Input id="username" onChange={onRegisterChange} value={registerDetails.username} label="username"/>
            <Input id="income" onChange={onRegisterChange} value={registerDetails.income} label="income"/>
            <Input id="password" onChange={onRegisterChange} value={registerDetails.password} label="password"
                   type="password"/>
        </>
    );

};

export default Register;
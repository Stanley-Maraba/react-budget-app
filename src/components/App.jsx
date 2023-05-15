import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';

import Header from './header/Header';
import ManageLoginData from './ManageLoginData';
import HomePage from './HomePage';
import ManageRegisterData from './ManageRegisterData';
import AuthLayout from './AuthLayout';

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<AuthLayout isRegistration={false} name="login"/>}/>
                <Route path="/register" element={<AuthLayout isRegistration={true} name="register"/>}/>
            </Routes>
        </>
    );
};

export default App;
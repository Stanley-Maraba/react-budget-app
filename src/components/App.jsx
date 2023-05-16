import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './header/Header';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    );
};

export default App;
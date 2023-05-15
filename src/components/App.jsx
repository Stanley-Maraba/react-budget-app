import React from 'react';
import {Route, Router, Routes} from 'react-router-dom';

import Header from './header/Header';
import ManageLoginData from './ManageLoginData';
import HomePage from './HomePage';
import ManageRegisterData from './ManageRegisterData';

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<ManageLoginData/>}/>
                <Route path="/register" element={<ManageRegisterData/>}/>
            </Routes>
        </>
    );
};

export default App;
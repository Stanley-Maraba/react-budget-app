import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './header/Header';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import PageNotFound from './PageNotFound';
import Dashboard from './dashboard';
import Expenses from './Expenses';
import Income from './income';
import Finance from './Finance';

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/expenses" element={<Expenses/>}/>
                <Route path="/income" element={<Income/>}/>
                <Route path="/finance" element={<Finance/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    );
};

export default App;
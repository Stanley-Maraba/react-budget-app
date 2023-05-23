import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './header/Header';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import PageNotFound from './PageNotFound';
import Dashboard from './Dashboard';
import Expense from './Expense';
import Income from './Income';

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/expenses" element={<Expense/>}/>
                <Route path="/income" element={<Income/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    );
};

export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './header/Header';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import PageNotFound from './PageNotFound';
import Dashboard from './Dashboard';
import Expense from './Expense';
import Income from './Income';

const App = () => {
    const user = useSelector((state) => state.user.user);
    return (
        <>
            <Header/>
            <Routes>
                {user ?
                    <>
                        <Route path="/expenses" element={<Expense/>}/>
                        <Route path="/income" element={<Income/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                        <Route path="/" element={<HomePage/>}/>
                    </>
                    :
                    <>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </>
                }
            </Routes>
        </>
    );
};

export default App;
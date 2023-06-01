import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../components/Login';
import { Outlet, Route, Routes } from 'react-router-dom';

const AuthRoute = () => {
    const user = useSelector((state) => state.user_store.user);

    return (
        user ? <Outlet/> : <Login/>
    );
};

export default AuthRoute;
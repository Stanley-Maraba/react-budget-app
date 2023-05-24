import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../Button';

import './header.css';

function Header() {

    const [userName, setUserName] = useState('');

    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/income">Income</NavLink>
                <NavLink to="/expenses">Expenses</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/login" className="btn">Log-in</NavLink>
                <NavLink to="/register" className="btn">Register</NavLink>
            </nav>
        </header>
    );
}

export default Header;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../Button';

import './header.css';

function Header() {

    const [userName, setUserName] = useState('');

    return (
        <section id="header">
            <nav>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/income">Income</NavLink>
                    <NavLink to="/expenses">Expenses</NavLink>
                    <NavLink to="/chart">Chart</NavLink>
                    <NavLink to="/login">
                        <Button name="log-in"/>
                    </NavLink>
                    <NavLink to="/register">
                        <Button name="Register"/>
                    </NavLink>
                </div>
            </nav>
        </section>

    );
}

export default Header;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

function Header() {

    const [userName, setUserName] = useState('');

    return (
        <section id="header">
            <nav>
                <div>
                    <NavLink to="/">Home</NavLink> {' '}
                    <NavLink to="/income">Income</NavLink> {' '}
                    <NavLink to="/expenses">Expenses</NavLink> {' '}
                    <NavLink to="/chart">Chart</NavLink> {' '}
                    <NavLink to="/login">
                        <button className="btn btn-primary">log-in</button>
                    </NavLink>
                    {' '}
                    <NavLink to="/register" className="navbar-right">
                        <button className="btn btn-primary">Register</button>
                    </NavLink>
                    {' '}
                </div>
            </nav>
        </section>

    );
}

export default Header;
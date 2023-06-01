import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './header.css';

function Header() {
    const user = useSelector((state) => state.user_store.user);
    return (
        <header>
            <nav>
                <NavLink to="/home">Home</NavLink>
                {user ?
                    <>
                        <NavLink to="/income">Income</NavLink>
                        <NavLink to="/expenses">Expenses</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <span>welcome back {user.username}</span>
                    </>
                    :
                    <>
                        <NavLink to="/login" className="btn">Log-in</NavLink>
                        <NavLink to="/register" className="btn">Register</NavLink>
                    </>
                }
            </nav>
        </header>
    );
}

export default Header;
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './auth-layout.css';

const AuthLayout = ({ name, children }) =>
    (
        <section id="auth-layout">
            <h1>{name}</h1>
            <form>
                {children}
            </form>
            <div>
                <span>{name === 'register' ? 'already' : 'not'} a member ?&nbsp;</span>
                <NavLink
                    to={name === 'register' ? '/login' : '/register'}>{name === 'register' ? 'login' : 'register'}</NavLink>
            </div>
        </section>
    );

AuthLayout.propTypes = {
    name: PropTypes.string.isRequired
};

export default AuthLayout;
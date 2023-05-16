import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './auth-layout.css';

const AuthLayout = ({ name, linkUrl, linkText, children }) =>
    (
        <section id="auth-layout">
            <h1>{name}</h1>
            <form>
                {children}
            </form>
            <div>
                <NavLink to={linkUrl}>{linkText}</NavLink>
            </div>
        </section>
    );

AuthLayout.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default AuthLayout;
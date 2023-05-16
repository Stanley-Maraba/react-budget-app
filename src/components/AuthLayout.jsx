import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './auth-layout.css';

const AuthLayout = ({ header, linkUrl, linkText, children }) =>
    (
        <section id="auth-layout">
            <h1>{header}</h1>
            <form>
                {children}
            </form>
            <div>
                <NavLink to={linkUrl}>{linkText}</NavLink>
            </div>
        </section>
    );

AuthLayout.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    linkUrl: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
};

export default AuthLayout;
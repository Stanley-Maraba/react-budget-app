import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './auth-layout.css';

const AuthLayout = ({ name, children }) =>
    (
        <section>
            <h1>{name}</h1>
            <article id="auth-layout">
                <form>
                    {children}
                    <button>{name}</button>

                </form>
                <div>
                    <span>{name === 'register' ? 'already' : 'not'} a member ?&nbsp;</span>
                    <NavLink
                        to={name === 'register' ? '/login' : '/register'}>{name === 'register' ? 'login' : 'register'}</NavLink>
                </div>
            </article>
        </section>
    );

AuthLayout.propTypes = {
    name: PropTypes.string.isRequired
};

export default AuthLayout;
import React from 'react';
import { Form, NavLink } from 'react-router-dom';
import PropTypes, { bool } from 'prop-types';

import Register from './Register';
import Login from './Login';

import './auth-layout.css';

const AuthLayout = (props) => {
    const isRegistration = props.isRegistration;

    return (
        <>
            <h1>{props.name}</h1>
            <section id="auth-layout">
                <form>
                    {isRegistration ? <Register/> : <Login/>}
                    <button className="btn btn-primary">{props.name}</button>
                </form>
                <div>
                    <span>{isRegistration ? 'already' : 'not'} a member ?&nbsp;</span>
                    <NavLink
                        to={isRegistration ? '/login' : '/register'}>{isRegistration ? 'login' : 'register'}</NavLink>
                </div>
            </section>
        </>
    );
};

AuthLayout.propTypes = {
    isRegistration: PropTypes.bool,
    name: PropTypes.string.isRequired
};

export default AuthLayout;
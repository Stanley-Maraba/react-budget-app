import React from 'react';
import {NavLink} from 'react-router-dom';

import Input from './Input';

import './login.css';

const Login = (props) => {

    return (
        <>
            <h1>Login</h1>
            <section id="login">
                <form>
                    <Input id={'username'} onLoginChanges={props.onLoginChange} loginDetails={props.loginDetails}/>
                    <Input id={'password'} onLoginChanges={props.onLoginChange} loginDetails={props.loginDetails}/>
                    <button type="submit">LOGIN</button>
                </form>
                <div>
                    <span>not a member ?&nbsp;</span>
                    <NavLink to="/register">register</NavLink>
                </div>
            </section>
        </>
    );
};
export default Login;
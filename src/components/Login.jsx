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
                    <Input id={'username'} onChange={props.onLoginChange} inputVal={props.loginDetails.username}/>
                    <Input id={'password'} onChange={props.onLoginChange} inputVal={props.loginDetails.password}/>
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
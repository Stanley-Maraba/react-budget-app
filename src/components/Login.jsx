import React from "react";
import PropTypes, { string } from "prop-types";
import { NavLink } from "react-router-dom";

import "./login.css";

const Login = (props) => {

    return (
        <>
            <h1>Login</h1>
            <section id="login">
                <form>
                    <label htmlFor="username">Username</label>
                    <fieldset>
                            <input
                                id="username"
                                onChange={(event) => props.onLoginChange({username: event.target.value})}
                                name="username"
                                type="text"
                                value={props.loginDetails.username}
                            />
                    </fieldset>
                    <label htmlFor="password">password</label>
                    <fieldset>
                            <input
                                id="password"
                                onChange={(event) => props.onLoginChange({password: event.target.value})}
                                name="password"
                                type="text"
                                value={props.loginDetails.password}
                            />
                    </fieldset>
                    <button type="submit">LOGIN</button>
                </form>

                <div>
                    <span>not a member ?&nbsp;</span>
                    <NavLink to="/register">register</NavLink>
                </div>
            </section>
        </>
    )
}

Login.defaultProps = {
    loginDetails : {
        password : "",
        username : ""
    },
    onChange : () => {}
}

Login.propTypes = {
    loginDetails : PropTypes.shape ({
    username : PropTypes.string,
    password : PropTypes.string,
    }),
    onChange : PropTypes.func.isRequired
}
export default Login;
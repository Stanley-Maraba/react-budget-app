import React from "react";
import {NavLink} from "react-router-dom";
import "./login.css";
import PropTypes, {string} from "prop-types";

const Login = (props) => {

    return (
        <>
            <h1>Login</h1>
            <section id="login">
                <form>
                    <fieldset>
                        <label htmlFor="username">Username</label>
                        <div id="fields">
                            <input
                                id="username"
                                onChange={(event) => props.onLoginChange({username: event.target.value})}
                                name="username"
                                type="text"
                                value={props.login.username}
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="password">password</label>
                        <div>
                            <input
                                id="password"
                                onChange={(event) => props.onLoginChange({password: event.target.value})}
                                name="password"
                                type="text"
                                value={props.login.password}
                            />
                        </div>
                    </fieldset>
                    <button className="btn btn-primary" type="submit">LOGIN</button>
                </form>

                <div>
                    <span>not a member ?&nbsp;</span>
                    <NavLink to="/register">register</NavLink>
                </div>
            </section>
        </>
    )
}

Login.propTypes = {
    username : PropTypes.string,
    password : PropTypes.string
}
export default Login;
import React from "react";
import "./login.css";
import {NavLink} from "react-router-dom";

function Login(props) {

    return (
        <>
            <h1>Login</h1>

            <div id="login">

                <form>
                    <fieldset>
                        <label htmlFor="userName">Username</label>
                        <div className="field" id="fields">
                            <input
                                id="userName"
                                onChange={props.onLoginChange}
                                name="username"
                                type="text"
                                className="form-control"
                                value={props.login.username}
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="password">password</label>
                        <div className="field">
                            <input
                                id="password"
                                onChange={props.onLoginChange}
                                name="password"
                                type="text"
                                className="form-control"
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
            </div>
        </>

    )
}

export default Login;
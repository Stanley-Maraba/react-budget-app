import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {

    return (
        <>
            <fieldset>
                <label htmlFor={props.id}>{props.id}</label>
                <input
                    id={props.id}
                    onChange={(event) => props.onLoginChanges({[props.id]: event.target.value})}
                    name={props.id}
                    type="text"
                    value={props.loginDetails.id}
                />
            </fieldset>
        </>
    );
};

Input.defaultProps = {
    loginDetails: {
        password: '',
        username: ''
    },
    onChange: () => {
    }
};

Input.propTypes = {
    loginDetails: PropTypes.shape({
        username: PropTypes.string,
        password: PropTypes.string
    }),
    onChange: PropTypes.func.isRequired
};
export default Input;
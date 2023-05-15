import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const inputId = props.id;

    return (
        <fieldset>
            <label htmlFor={inputId}>{props.label}</label>
            <input
                id={inputId}
                onChange={(event) => props.onChange({ [inputId]: event.target.value })}
                name={inputId}
                type={props.type}
                value={props.value}
            />
        </fieldset>
    );
};

Input.defaultProps = {
    value: '',
    type: 'text'
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password'])
};

export default Input;
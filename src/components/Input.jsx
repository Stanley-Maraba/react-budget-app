import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {

    return (
        <>
            <fieldset>
                <label htmlFor={props.id}>{props.label}</label>
                <input
                    id={props.id}
                    onChange={(event) => props.onChange({[props.id]: event.target.value})}
                    name={props.id}
                    type={props.type}
                    value={props.inputVal}
                />
            </fieldset>
        </>

    );
};

Input.defaultProps = {
    inputVal: '',
    type: 'text'
};

Input.propTypes = {
    inputVal: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password'])
};
export default Input;
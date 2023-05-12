import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {

    return (
        <>
            <fieldset>
                <label htmlFor={props.id}>{props.id}</label>
                <input
                    id={props.id}
                    onChange={(event) => props.onChange({[props.id]: event.target.value})}
                    name={props.id}
                    type="text"
                    value={props.inputVal}
                />
            </fieldset>
        </>

    );
};

Input.defaultProps = {
    inputVal: '',
};

Input.propTypes = {
    inputVal: PropTypes.string,
    onChange: PropTypes.func.isRequired
};
export default Input;
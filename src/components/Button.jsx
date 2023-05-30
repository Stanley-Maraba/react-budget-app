import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

    return (
        <button type="button" onClick={props.onClick}>{props.name}</button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired
};
export default Button;
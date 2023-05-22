import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

    return (
        <button>{props.name}</button>
    );
};

Button.prototype = {
    name: PropTypes.string.isRequired
};
export default Button;
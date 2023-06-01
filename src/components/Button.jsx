import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const Button = (props) => {

    return (
        <button type={props.type} onClick={props.onClick}>{props.name}</button>
    );
};

Button.defaultProps = {
    type: 'button'
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button','submit']).isRequired
};
export default Button;
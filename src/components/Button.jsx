import React from 'react';
import PropTypes from 'prop-types';

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
    type: PropTypes.oneOf(['button', 'submit']),
    onClick: PropTypes.func.isRequired
};
export default Button;
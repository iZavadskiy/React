import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const click = () => {
    props.onClick();
  };
  const btnClasses = `myButton btn btn-${props.type}`;
  return (
    <button
      className={btnClasses}
      onClick={click}
    >
      { props.name }
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


export default Button;

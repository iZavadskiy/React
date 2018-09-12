import React from 'react';
// import PropTypes from 'prop-types';

function Button(props) {
  const click = () => {
    props.onClick();
  };
  return (
    <button
      className="btn btn-primary"
      onClick={click}
    >
      { props.name }
    </button>
  );
}

Button.propTypes = {

};


export default Button;

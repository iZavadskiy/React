import React from 'react';
// import PropTypes from 'prop-types';

function TextField(props) {
  function handleInput(event) {
    props.onChange(event.target.value);
  }
  const fieldClasses = 'form-control mySpaces ' + (props.valid == true ? '' : 'is-invalid');

  return (
    <input className={fieldClasses} type="text" onChange={handleInput} value={props.value} placeholder={props.placeholder} />
  );
}
TextField.propTypes = {

};


export default TextField;

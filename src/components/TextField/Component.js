import React from 'react';
// import PropTypes from 'prop-types';

function TextField(props) {
  function handleInput(event) {
    props.onChange(event.target.value);
  }


  return (
    <input className="form-control mySpaces" type="text" onChange={handleInput} value={props.value} placeholder={props.placeholder} />
  );
}
TextField.propTypes = {

};


export default TextField;

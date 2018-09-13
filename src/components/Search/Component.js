import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField';

function Search(props) {
  return (
    <TextField onChange={props.onChange} value={props.inputData} placeholder="Search" valid />
  );
}
Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  inputData: PropTypes.string.isRequired,

};


export default Search;

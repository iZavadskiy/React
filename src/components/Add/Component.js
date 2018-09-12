import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '../TextField';
import Button from '../Button';

function Add(props) {
  function saveAddedData() {
    props.addAddres('asdasd');
    props.setShowMode();
  }

  return (
    <div>
      <h1> <a href="" onClick={props.setShowMode}>My Address Book </a>/ New contact</h1>
      <TextField onChange={props.onChangeName} value={props.inputDataName} placeholder="Name" />
      <TextField onChange={props.onChangeEmail} value={props.inputDataEmail} placeholder="Email" />
      <Button onClick={props.setShowMode} name="Cancel" />
      <Button onClick={saveAddedData} name="Add" />
    </div>
  );
}
Add.propTypes = {

};


export default Add;

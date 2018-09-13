import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '../TextField';
import Button from '../Button';

function Add(props) {
  function saveAddedData() {
    props.addAddres({
      name: props.inputDataName,
      email: props.inputDataEmail,
    });
    props.clearAllinput();
    props.setShowMode();
  }

  function returnBack(){
    props.clearAllinput();
    props.setShowMode();
  }

  return (
    <div>
      <h1> <span className="myUrl" onClick={returnBack}>My Address Book </span>/ New contact</h1>
      <TextField onChange={props.onChangeName} value={props.inputDataName} placeholder="Name" />
      <TextField onChange={props.onChangeEmail} value={props.inputDataEmail} placeholder="Email" />
      <div className="row">
        <div className="col-md text-right">
      <Button onClick={returnBack} name="Cancel" type="secondary"/>
      <Button onClick={saveAddedData} name="Add" type="success"/>
    </div>
    </div>
    </div>
  );
}
Add.propTypes = {

};


export default Add;

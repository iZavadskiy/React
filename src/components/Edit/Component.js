import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '../TextField';
import Button from '../Button';

function Edit(props) {
  function saveAddedData() {

    props.editAddres({
      name: props.inputDataName === '' ? props.currentName : props.inputDataName,
      email: props.inputDataEmail === '' ? props.currentEmail : props.inputDataEmail,
    },props.id);
    props.clearAllinput();
    props.setShowMode();
  }

  function returnBack(){
    props.clearAllinput();
    props.setShowMode();
  }

  function hendleDelete(){
    props.onDelete(props.id);
    returnBack()
  }


  return (
    <div>
      <h1> <span className="myUrl" onClick={returnBack}>My Address Book </span>/ Edit contact</h1>
      <TextField onChange={props.onChangeName} value={props.inputDataName} placeholder="Name" />
      <TextField onChange={props.onChangeEmail} value={props.inputDataEmail} placeholder="Email" />
      <div className="row">
        <div className="col-md">
          <Button onClick={hendleDelete} name="Delete" type="danger"/>
        </div>
        <div className="col-md text-right">
          <Button onClick={returnBack} name="Cancel" type="secondary"/>
          <Button onClick={saveAddedData} name="Save" type="success"/>
        </div>
      </div>
    </div>
  );
}
Edit.propTypes = {

};


export default Edit;

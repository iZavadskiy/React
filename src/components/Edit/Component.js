import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '../TextField';
import Button from '../Button';
import { isEmailValid, isNamelValid } from '../../helpers/validators'

class Edit extends React.Component {


  constructor(){
    super();

    this.state = {
      nameError: false,
      emailError: false,
    };


    this.saveAddedData = this.saveAddedData.bind(this);
    this.returnBack = this.returnBack.bind(this);
    this.hendleDelete = this.hendleDelete.bind(this);
  }

  saveAddedData() {
    const emailValid = isEmailValid(this.props.inputDataEmail);
    const nameValid = isNamelValid(this.props.inputDataName);

    if( emailValid && nameValid){
      this.props.editAddres({
        name: this.props.inputDataName === '' ? this.props.currentName : this.props.inputDataName,
        email: this.props.inputDataEmail === '' ? this.props.currentEmail : this.props.inputDataEmail,
      }, this.props.id);
      this.props.clearAllinput();
      this.props.setShowMode();
      }else{
        this.setState({
          nameError: !nameValid,
          emailError: !emailValid,
        })
    }
  }

  returnBack(){
    this.props.clearAllinput();
    this.props.setShowMode();
  }

  hendleDelete(){
    this.props.onDelete(this.props.id);
    this.returnBack()
  }

  render() {
    return (
      <div>
        <h1><span className="myUrl" onClick={this.returnBack}>My Address Book </span>/ Edit contact</h1>
        <TextField onChange={this.props.onChangeName} value={this.props.inputDataName} placeholder="Name" valid={!this.state.nameError} />
        <TextField onChange={this.props.onChangeEmail} value={this.props.inputDataEmail} placeholder="Email" valid={!this.state.emailError} />
        <div className="row">
          <div className="col-md">
            <Button onClick={this.hendleDelete} name="Delete" type="danger"/>
          </div>
          <div className="col-md text-right">
            <Button onClick={this.returnBack} name="Cancel" type="secondary"/>
            <Button onClick={this.saveAddedData} name="Save" type="success"/>
          </div>
        </div>
      </div>
    );
  }
}
Edit.propTypes = {

};


export default Edit;

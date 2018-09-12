import React from 'react';
// import PropTypes from 'prop-types';
import List from '../List';
import Search from '../Search';
import Button from '../Button';
import Add from '../Add';


function MainComponent(props) {
  props.fetchList();
  function renderShowMode() {
    return (
      <div>
        <h1>My Address Book</h1>
        <Search />
        <List />
        <div>
          <Button onClick={props.setAddMode} name="add" />
        </div>
      </div>
    );
  }

  function renderAddMode() {
    return (
      <div>
        <Add />
      </div>
    );
  }

  function renderEditMode() {
    return (
      <div>
       edit
      </div>
    );
  }


  return (
    <div className="row justify-content-center">
      <div className="col col-md-4">
        {props.appMode === 'show' ? renderShowMode() : ''}
        {props.appMode === 'add' ? renderAddMode() : ''}
        {props.appMode === 'edit' ? renderEditMode() : ''}
      </div>
    </div>
  );
}
MainComponent.propTypes = {

};


export default MainComponent;

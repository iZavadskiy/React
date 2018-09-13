import React from 'react';
// import PropTypes from 'prop-types';
import List from '../List';
import Search from '../Search';
import Button from '../Button';
import Add from '../Add';
import Edit from '../Edit';


class MainComponent extends React.Component {
  // props.fetchList();

  constructor(){
    super();
  }

  renderShowMode() {
    return (
      <div>
        <h1>My Address Book</h1>
        <Search />
        <List />
        <div>
          <Button onClick={this.props.setAddMode} name="add" type="primary"/>
        </div>
      </div>
    );
  }

   renderAddMode() {
    return (
      <div>
        <Add />
      </div>
    );
  }

   renderEditMode() {
    return (
      <div>
        <Edit />
      </div>
    );
  }

  componentWillMount(){
    this.props.fetchList();
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col col-md-4">
          {this.props.appMode === 'show' ? this.renderShowMode() : ''}
          {this.props.appMode === 'add' ? this.renderAddMode() : ''}
          {this.props.appMode === 'edit' ? this.renderEditMode() : ''}
        </div>
      </div>
    );
  }
}
MainComponent.propTypes = {

};


export default MainComponent;

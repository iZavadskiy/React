import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import Search from '../Search';
import Button from '../Button';
import Add from '../Add';
import Edit from '../Edit';


class MainComponent extends React.Component {
  // props.fetchList();

  componentWillMount() {
    this.props.fetchList();
  }

  renderShowMode() {
    return (
      <div>
        <h1>My Address Book</h1>
        <Search />
        <List />
        <div>
          <Button onClick={this.props.setAddMode} name="add" type="primary" />
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
  fetchList: PropTypes.func.isRequired,
  setAddMode: PropTypes.func.isRequired,
  appMode: PropTypes.string.isRequired,

};


export default MainComponent;

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

function Item(props) {
  return (
    <div className="card mySpaces">
      <div className="card-header myUrl" onClick={() => props.onEdit(props.id)}>
        {props.name}
      </div>
      <div className="card-body">
        <p className="card-text">{props.email}</p>
        <div className="text-right"><Button onClick={() => props.onDelete(props.id)} name="Delete" type="danger" /></div>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,

};

export default Item;

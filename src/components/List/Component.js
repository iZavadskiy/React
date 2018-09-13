import React from 'react';
// import PropTypes from 'prop-types';
import Item from './item';

function List(props) {
  return (
    props.items.length !== 0 ?
      props.items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          email={item.email}
          onDelete={props.removeFromList}
          onEdit={props.setEditMode}
        />
      )) : "There is no records"
  );
}

List.propTypes = {

};

export default List;


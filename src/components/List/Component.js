import React from 'react';
// import PropTypes from 'prop-types';
import Item from './item';

function List(props) {
  return (
    Object.keys(props.items).length !== 0 ? (
      Object.keys(props.items).map(key => (
        <Item
          key={props.items[key].id}
          name={props.items[key].name}
          email={props.items[key].email}
          uid={key}
        />
      )))
      : 'There is no items yet.'
  );
}

List.propTypes = {

};

export default List;


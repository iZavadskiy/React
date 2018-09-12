import React from 'react';
// import PropTypes from 'prop-types';
import Item from './item';

function List(props) {
  return (
    props.items.map(item => (
      <Item
        key={item.id}
        name={item.name}
        email={item.email}
      />
    ))
  );
}

List.propTypes = {

};

export default List;


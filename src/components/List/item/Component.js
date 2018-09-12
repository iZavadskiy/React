import React from 'react';
// import PropTypes from 'prop-types';


function Item(props) {
  return (
    <div>
      <div>
        {props.name}
      </div>
      <div>
        {props.email}
      </div>
    </div>

  );
}

Item.propTypes = {

};

export default Item;

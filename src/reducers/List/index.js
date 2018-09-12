const initState = {};

const list = (state = initState, { type, payload }) => {
  switch (type) {
    case 'ADD':
      return state;
    case 'FETCH_LIST':
      return payload;
    default:
      return state;
  }
};

export default list;

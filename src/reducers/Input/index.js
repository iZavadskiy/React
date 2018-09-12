const initState = {
  search: '1',
  name: '1',
  email: '1',
};

const input = (state = initState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_INPUT_SEARCH':
      return Object.assign(state, { search: payload });
    case 'CHANGE_INPUT_ADD_NAME':
      console.log(state);
      return payload;
    case 'CHANGE_INPUT_ADD_EMAIL':
      return payload;
    default:
      return state;
  }
};

export default input;

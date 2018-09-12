const initState = {
  search: '',
  name: '',
  email: ''
};

const input = (state = initState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_INPUT_SEARCH':
      return Object.assign(state, { search: payload });
    case 'CHANGE_INPUT_ADD_NAME':
      console.log(state);
      return Object.assign(state, { name: payload });
    case 'CHANGE_INPUT_ADD_EMAIL':
      return Object.assign(state, { email: payload });
    default:
      return state;
  }
};

export default input;

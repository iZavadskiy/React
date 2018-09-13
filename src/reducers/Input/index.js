import { Map } from 'immutable';

const initState = Map({
  search: '',
  name: '',
  email: '',
});

const input = (state = initState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_INPUT_SEARCH':
      return state.update('search', () => payload);
    case 'CHANGE_INPUT_ADD_NAME':
      return state.update('name', () => payload);
    case 'CHANGE_INPUT_ADD_EMAIL':
      return state.update('email', () => payload);
    case 'CLEAR_ALL_INPUT':
      const clear = Map({
        search: '',
        name: '',
        email: '',
      });
      return state.update(() => clear);
    default:
      return state;
  }
};

export default input;

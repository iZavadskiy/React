import { Map } from 'immutable';

const initState = Map({
  appMode: 'show',
  editId: null,
});

const appMode = (state = initState, { type, payload }) => {
  switch (type) {
    case 'SET_ADD_MODE':
      return Map({
        appMode: 'add',
        editId: null,
      });
    case 'SET_SHOW_MODE':
      return Map({
        appMode: 'show',
        editId: null,
      });
    case 'SET_EDIT_MODE':
      return Map({
        appMode: 'edit',
        editId: payload,
      });
    default:
      return state;
  }
};

export default appMode;

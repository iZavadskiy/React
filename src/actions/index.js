import { listRef } from '../config/firebase';

function createAction(type, getPayload) {
  return (...args) => ({
    type,
    payload: getPayload(...args),
  });
}

function identity(a) {
  return a;
}

// local actions

export const changeInputSearch = createAction('CHANGE_INPUT_SEARCH', identity);
export const changeInputAddName = createAction('CHANGE_INPUT_ADD_NAME', identity);
export const changeInputAddEmail = createAction('CHANGE_INPUT_ADD_EMAIL', identity);
export const setShowMode = createAction('SET_SHOW_MODE', identity);
export const setAddMode = createAction('SET_ADD_MODE', identity);
export const setEditMode = createAction('SET_EDIT_MODE', identity);


// remote actions

export const addAddres = newAddres => async (dispatch) => {
    console.log(newAddres);
  listRef.push().set(newAddres);
};

export const removeFromList = removeId => async (dispatch) => {
  listRef.child(removeId).remove();
};

export const fetchList = () => async (dispatch) => {
  listRef.on('value', (snapshot) => {
    dispatch({
      type: 'FETCH_LIST',
      payload: snapshot.val(),
    });
  });
};

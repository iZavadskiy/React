function createAction(type, getPayload) {
  return (...args) => ({
    type,
    payload: getPayload(...args),
  });
}

function identity(a) {
  return a;
}

export const changeInputSearch = createAction('CHANGE_INPUT_SEARCH', identity);
export const changeInputAddName = createAction('CHANGE_INPUT_ADD_NAME', identity);
export const changeInputAddEmail = createAction('CHANGE_INPUT_ADD_EMAIL', identity);
export const setShowMode = createAction('SET_SHOW_MODE', identity);
export const setAddMode = createAction('SET_ADD_MODE', identity);
export const setEditMode = createAction('SET_EDIT_MODE', identity);

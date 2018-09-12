const initState = 'show';

const appMode = (state = initState, { type }) => {
  switch (type) {
    case 'SET_ADD_MODE':
      return 'add';
    case 'SET_SHOW_MODE':
      return 'show';
    default:
      return state;
  }
};

export default appMode;

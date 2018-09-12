const initState = [
  {
    id: 1,
    name: 'lol',
    email: 'kek',
  },
  {
    id: 2,
    name: 'lol2',
    email: 'kek2',
  },

];

const list = (state = initState, { type, payload }) => {
  switch (type) {
    case 'ADD':
      return state;
    default:
      return state;
  }
};

export default list;

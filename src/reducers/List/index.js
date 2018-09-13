const initState = [];

function transformToArray(dataFromFirebase) {
  const array = [];
  if (dataFromFirebase !== null) {
    Object.keys(dataFromFirebase).map((key) => {
      array.push({
        id: key,
        name: dataFromFirebase[key].name,
        email: dataFromFirebase[key].email,
      });
    });
  }
  return array;
}

const list = (state = initState, { type, payload }) => {
  switch (type) {
    case 'ADD':
      return state;
    case 'FETCH_LIST':
      return transformToArray(payload);
    default:
      return state;
  }
};

export default list;

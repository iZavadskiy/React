import { connect } from 'react-redux';
 import { removeFromList, setEditMode } from '../../actions';

function serchInList(item, query){
  return (item.name.indexOf(query) !== -1)
}

const mapStateToProps = state => ({
  items: state.list.filter(list => serchInList(list, state.input.get('search'))),
});

const mapDispatchToProps = dispatch => ({

  removeFromList: (value) => {
    dispatch(removeFromList(value));
  },
  setEditMode: (value) => {
    dispatch(setEditMode(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

import { connect } from 'react-redux';
import { changeInputAddName, changeInputAddEmail, setShowMode, removeFromList, clearAllinput, editAddres } from '../../actions';

function getCurrentItemById(items, id) {
  let find = '';

  items.map((item) => {
    if (item.id === id) {
      find = item;
    }
  });

  return find;
}

function setValue(inputValue, currentValue) {
  if (inputValue === '') {
    return currentValue;
  }
  return inputValue;
}

const mapStateToProps = state => ({
  currentName: getCurrentItemById(state.list, state.appMode.get('editId')).name,
  currentEmail: getCurrentItemById(state.list, state.appMode.get('editId')).email,
  id: state.appMode.get('editId'),
  inputDataName: setValue(state.input.get('name'), getCurrentItemById(state.list, state.appMode.get('editId')).name),
  inputDataEmail: setValue(state.input.get('email'), getCurrentItemById(state.list, state.appMode.get('editId')).email),
});

const mapDispatchToProps = dispatch => ({

  onChangeName: (value) => {
    dispatch(changeInputAddName(value));
  },
  onChangeEmail: (value) => {
    dispatch(changeInputAddEmail(value));
  },
  onDelete: (value) => {
    dispatch(removeFromList(value));
  },
  setShowMode: () => {
    dispatch(setShowMode());
  },
  clearAllinput: () => {
    dispatch(clearAllinput());
  },
  editAddres: (value, id) => {
    dispatch(editAddres(value, id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

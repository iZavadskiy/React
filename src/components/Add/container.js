import { connect } from 'react-redux';
import { changeInputAddName, changeInputAddEmail, setShowMode, addAddress, clearAllinput } from '../../actions';


const mapStateToProps = state => ({
  inputDataName: state.input.get('name'),
  inputDataEmail: state.input.get('email'),
});

const mapDispatchToProps = dispatch => ({

  onChangeName: (value) => {
    dispatch(changeInputAddName(value));
  },
  onChangeEmail: (value) => {
    dispatch(changeInputAddEmail(value));
  },
  setShowMode: () => {
    dispatch(setShowMode());
  },
  clearAllinput: () => {
    dispatch(clearAllinput());
  },
  addAddress: (valuse) => {
    dispatch(addAddress(valuse));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

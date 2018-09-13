import { connect } from 'react-redux';
import { changeInputAddName, changeInputAddEmail, setShowMode, addAddres, clearAllinput } from '../../actions';


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
  addAddres: (valuse) => {
    dispatch(addAddres(valuse));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

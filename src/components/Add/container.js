import { connect } from 'react-redux';
import { changeInputAddName, changeInputAddEmail, setShowMode, addAddres } from '../../actions';


const mapStateToProps = state => ({
  inputDataName: state.name,
  inputDataEmail: state.email,
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
  addAddres: (valuse) => {
    dispatch(addAddres(valuse));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

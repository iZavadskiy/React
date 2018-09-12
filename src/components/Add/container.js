import { connect } from 'react-redux';
import { changeInputAddName, changeInputAddEmail, setShowMode } from '../../actions';


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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

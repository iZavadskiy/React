import { connect } from 'react-redux';
import { setAddMode } from '../../actions';


const mapStateToProps = state => ({
  appMode: state.appMode,
});

const mapDispatchToProps = dispatch => ({

  setAddMode: (value) => {
    dispatch(setAddMode());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

import { connect } from 'react-redux';
import { setAddMode, fetchList} from '../../actions';


const mapStateToProps = state => ({
  appMode: state.appMode,
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => {
    dispatch(fetchList());
  },
  setAddMode: (value) => {
    dispatch(setAddMode());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

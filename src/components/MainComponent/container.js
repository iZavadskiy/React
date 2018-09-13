import { connect } from 'react-redux';
import { setAddMode, fetchList} from '../../actions';


const mapStateToProps = state => ({
  appMode: state.appMode.get('appMode'),
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => {
    dispatch(fetchList());
  },
  setAddMode: () => {
    dispatch(setAddMode());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

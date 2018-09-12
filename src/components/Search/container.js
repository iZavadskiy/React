import { connect } from 'react-redux';
import { changeInputSearch } from '../../actions';


const mapStateToProps = state => ({
  inputData: state.search,
});

const mapDispatchToProps = dispatch => ({

  onChange: (value) => {
    dispatch(changeInputSearch(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

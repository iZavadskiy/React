import { connect } from 'react-redux';
// import { changeInputSearch } from '../../actions';


const mapStateToProps = state => ({
  items: state.list,
});

// const mapDispatchToProps = dispatch => ({
//
//   onChange: (value) => {
//     dispatch(changeInputSearch(value));
//   },
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
);

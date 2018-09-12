import { combineReducers } from 'redux';
import input from './Input';
import list from './List';
import appMode from './appMode';

const mainReducer = combineReducers({
  list,
  input,
  appMode,
});


export default mainReducer;

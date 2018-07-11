import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer/*, (add new reducers to this list. i.e...)
  auth: authReducer
  */
});
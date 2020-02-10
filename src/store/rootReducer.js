import { combineReducers } from 'redux';
import eReducer from '../containers/Template/reducers';

export default combineReducers({
  eState: eReducer
});


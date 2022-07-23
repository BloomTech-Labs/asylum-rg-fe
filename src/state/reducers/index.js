import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import fetchFilterReducer from './fetchFilterReducer';

export default combineReducers({
  dataReducer,
  fetchFilterReducer,
});

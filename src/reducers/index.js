//@vendors
import {combineReducers} from 'redux';

// @reducers
import gitReducer from './gitReducer';

const AppReducer = combineReducers({
  gitReducer,
});

export default AppReducer;

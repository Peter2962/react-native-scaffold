import { combineReducers } from 'redux';
import UserReducer from './reducers/UserReducer';
import AuthReducer from './reducers/AuthReducer';

const reducers = combineReducers({UserReducer, AuthReducer});
export default reducers;
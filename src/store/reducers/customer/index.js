import { combineReducers } from 'redux';
import auth from './auth.reducer';

const product = combineReducers({
  auth,
});

export default product;

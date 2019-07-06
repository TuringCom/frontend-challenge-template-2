import { combineReducers } from 'redux';
import alerts from './alerts';
import customer from './customer';
import products from './products';
import product from './product';

const createReducer = asyncReducers =>
  combineReducers({
    alerts,
    customer,
    products,
    product,
    ...asyncReducers,
  });

export default createReducer;

import { all } from 'redux-saga/effects';
import customerSaga from './cutomer';
import productsSaga from './products';
import productSaga from './product';

/**
 * @export
 */
export default function* rootSaga() {
  yield all([productsSaga(), productSaga(), customerSaga()]);
}

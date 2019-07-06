import { put, takeLatest, call } from 'redux-saga/effects';
import customerService from '../../../services/customerService';
import {
  REGISTER_NEW_USER,
  REGISTER_NEW_USER_ERROR,
  REGISTER_NEW_USER_SUCCESS,
} from '../../actions/customer';
import { HIDE_AUTH } from '../../actions/alerts';

/**
 *
 * @param {any} action
 */
function* customerRegisterSaga(action) {
  try {
    const data = yield call(customerService.registerUser, action.payload);
    yield put({
      type: REGISTER_NEW_USER_SUCCESS,
      payload: data,
    });
    localStorage.setItem('token', data.accessToken);
    yield put({
      type: HIDE_AUTH,
    });
  } catch (error) {
    yield put({
      type: REGISTER_NEW_USER_ERROR,
      payload: error,
    });
    localStorage.removeItem('token');
  }
}

/**
 *
 * @export
 */
export function* registerUserWatcher() {
  yield takeLatest(REGISTER_NEW_USER, customerRegisterSaga);
}

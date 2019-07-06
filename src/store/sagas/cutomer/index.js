import { all } from 'redux-saga/effects';
import { registerUserWatcher } from './customer_register.saga';
import { loginUserWatcher } from './customer_login.saga';
import { logoutUserWatcher } from './customer_logout.saga';

/**
 *
 * @export
 */
export default function* customerSaga() {
  yield all([registerUserWatcher(), loginUserWatcher(), logoutUserWatcher()]);
}

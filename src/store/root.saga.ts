import { watchSignupUser } from './auth/auth.sagas';
import { watchGetProfileData } from './profile/profile.sagas';
import { all, call, fork } from 'redux-saga/effects';
import { flow } from './chat/chatSaga';


export default function* rootSaga() {
  yield all([call(watchSignupUser), call(watchGetProfileData), fork(flow)]);
}

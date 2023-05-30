import { call, put } from 'redux-saga/effects';

import { requestGetUser } from '../requests/User';
import { setUser } from '../../auth/User';

export function* handleGetUser(action) {
    try {
        if (!action.payload) {
            throw new Error('Payload is undefined');
        }
        const { payload: details } = action;
        const { navigate } = action;

        const response = yield call(requestGetUser, details);
        const { data } = response;
        yield put(setUser(data));
        yield call(navigate, '/dashboard');
    } catch (error) {
        alert(error);
    }
}
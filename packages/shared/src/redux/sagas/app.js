import { all, takeLatest, put } from 'redux-saga/effects';
import { Actions, Types } from '../modules/app';

/**
 * App init handler
 */
function* init() {
	try {
		yield put(Actions.initSuccess());
	} catch (e) {
		yield put(Actions.initFailure('Opps! Something went wrong'));
	}
}

/**
 * App watcher
 */
export default function* watchApp() {
	yield all([
		yield takeLatest(Types.INIT, init),
	]);
}

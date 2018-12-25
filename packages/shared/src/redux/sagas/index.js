import { all, fork } from 'redux-saga/effects';

/* ------------- Sagas ------------- */
import watchApp from './app';

/* ------------- Watchers ------------- */
export default function* root() {
	yield all([
		yield fork(watchApp),
	]);
}

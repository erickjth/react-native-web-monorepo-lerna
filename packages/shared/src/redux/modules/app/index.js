/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators: Actions } = createActions({
	init: null,
	initSuccess: ['options'],
	initFailure: ['error'],
	changeTheme: ['theme'],
}, { prefix: '@APP/' });

export { Types, Actions };

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	theme: 'light',
	isInitiated: false,
};

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
	[Types.INIT]: (state) => state,

	[Types.INIT_SUCCESS]: (state) => produce(state, draft => {
		draft.isInitiated = true;
		draft.error = null;
	}),

	[Types.INIT_FAILURE]: (state, { error }) => produce(state, draft => {
		draft.isInitiated = false;
		draft.error = error;
	}),

	[Types.CHANGE_THEME]: (state, { theme }) => produce(state, draft => {
		draft.theme = theme;
	}),
});
/* eslint-enable no-param-reassign */

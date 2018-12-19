import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/reducers';
import rootSagas from './sagas';

const persistConfig = {
	key: 'app',
	storage,
	version: 1,
	blacklist: [],
};

export default function configureStore() {
	const sagaMiddleware = createSagaMiddleware();

	const persistedReducer = persistReducer(persistConfig, rootReducer);

	const appropriatedCompose = process.env.NODE_ENV === 'development' ?
		composeWithDevTools :
		compose;

	const store = createStore(
		persistedReducer,
		appropriatedCompose(
			applyMiddleware(sagaMiddleware),
		),
	);

	store.persistor = persistStore(store, null, () => store.dispatch({ type: '@APP/INIT' }));

	sagaMiddleware.run(rootSagas);

	return store;
}

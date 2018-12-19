import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import withTheme from './styles/withTheme';
import GlobalStyle from './styles/GlobalStyle';
import createStore from './redux/createStore';

const store = createStore();

export default function setupApp(App) {
	const ThemedApp = withTheme(App);

	class Root extends Component {
		render() {
			return (
				<Provider store={store}>
					<PersistGate persistor={store.persistor} loading={null}>
						<React.Fragment>
							<ThemedApp />
							<GlobalStyle />
						</React.Fragment>
					</PersistGate>
				</Provider>
			);
		}
	}

	return Root;
}

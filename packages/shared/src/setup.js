import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ThemeProvider from './styles/ThemeProvider';
import GlobalStyle from './styles/GlobalStyle';
import createStore from './redux/createStore';

const store = createStore();

export default function setupApp(App) {
	class Root extends Component {
		render() {
			return (
				<Provider store={store}>
					<ThemeProvider>
						<PersistGate persistor={store.persistor} loading={null}>
							<React.Fragment>
								<App />
								<GlobalStyle />
							</React.Fragment>
						</PersistGate>
					</ThemeProvider>
				</Provider>
			);
		}
	}

	return Root;
}

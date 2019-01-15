import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { RootStack } from './routes';

const AppContainer = createAppContainer(RootStack);

class AppNavigator extends Component {
	setTopLeverHandlers = (navigatorRef) => {
		//NavigationHandler.setTopLevelNavigator(navigatorRef);
		//NavigationHandler.setTopLevelReduxDispatch(this.props.dispatch);
	}

	render() {
		return (
			<AppContainer ref={this.setTopLeverHandlers} />
		);
	}
}

export default AppNavigator;

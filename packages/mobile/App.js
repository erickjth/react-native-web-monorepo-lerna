import React, { Component } from 'react';
import Application from 'shared/src/components/App';
import Home from 'shared/src/screens/Home';
import MainWrapper from 'shared/src/components/layout/MainWrapper';

export default class App extends Component {
	render() {
		return (
			<MainWrapper>
				<Application />
				<Home />
			</MainWrapper>
		);
	}
}

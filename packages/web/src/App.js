import React, { Component } from 'react';
import Home from 'shared/src/screens/Home';
import MainWrapper from 'shared/src/components/layout/MainWrapper';

class App extends Component {
	render() {
		return (
			<MainWrapper>
				<Home />
			</MainWrapper>
		);
	}
}

export default App;

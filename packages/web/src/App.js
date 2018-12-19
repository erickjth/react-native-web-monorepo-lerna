import React, { Component } from 'react';
import Text from 'shared/src/components/primitives/Text';
import Heading from 'shared/src/components/primitives/Heading';
import './App.css';

class App extends Component {
		render() {
			return (
				<div className="App">
					<header className="App-header">
						<Heading as='h1' variant='h1' textAlign='center' m={10} fontSize={20}>Welcome to React Web!</Heading>
						<Text>
							Edit <code>src/App.js</code> and save to reload.
						</Text>
					</header>
				</div>
			);
		}
}

export default App;

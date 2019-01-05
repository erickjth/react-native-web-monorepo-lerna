import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text, { Heading5, Heading2 } from './primitives/Text';
import Container from './layout/Container';
import Touchable from './primitives/Touchable';
import Button from './common/Button';
import { Actions } from '../redux/modules/app';

const toggleThemeName = (theme) => (theme === 'light' ? 'dark' : 'light');

class App extends Component {
	render() {
		const { theme, changeTheme } = this.props;

		return (
			<Container
				flex={1}
				justifyContent='center'
				alignItems='center'
			>
				<Heading2 textAlign='center' m={10}>
					Welcome to React Native / Web!
				</Heading2>
				<Text>
					Edit shared/src/Components/App.js
				</Text>

				<Heading5>
					Current theme: {theme}
				</Heading5>

				<Button
					text={`Use theme ${toggleThemeName(theme)}`}
					onPress={() => changeTheme(toggleThemeName(theme))}
				/>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	theme: state.app.theme,
});

const mapDispatchToProps = {
	changeTheme: Actions.changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text, { Heading3, Heading2 } from '../components/primitives/Text';
import View from '../components/primitives/View';
import Container from '../components/layout/Container';
import Touchable from '../components/primitives/Touchable';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';
import Paper from '../components/common/Paper';
import Section from '../components/common/Section';
import StatusBar from '../components/common/StatusBar';
import ScrollView from '../components/common/ScrollView';
import TextInput from '../components/common/Form/TextInput';
import { Actions } from '../redux/modules/app';

const toggleThemeName = (theme) => (theme === 'light' ? 'dark' : 'light');

class Home extends Component {
	state = { value: '' }

	componentDidUpdate() {
		const { theme } = this.props;
		StatusBar.setBarStyle(theme === 'light' ? 'dark-content' : 'light-content');
	}

	render() {
		const { onPressProfile, theme, changeTheme } = this.props;

		return (
			<Container
				flex={1}
				justifyContent='flex-start'
			>
				<ScrollView
					contentContainerStyle={{ padding: 20 }}
				>
					<Heading2 m={10}>
						Welcome to React Native / Web!
					</Heading2>

					<Section>
						<Heading3 m={10}>
							Theming
						</Heading3>

						<Text>Current Theme: {theme}</Text>

						<Button
							text={`Use theme ${toggleThemeName(theme)}`}
							onPress={() => changeTheme(toggleThemeName(theme))}
						/>
					</Section>

					<Section>
						<Heading3 m={10}>Common Components</Heading3>

						<View flexDirection='row' justifyContent='flex-start'>
							<Touchable flex={1}>
								<Paper variant='red' flex={1}>
									<Icon name='dashboard' color='white' />
									<Text variant='white'>Dashboard</Text>
								</Paper>
							</Touchable>

							<View flex={1}>
								<Paper flexDirection='row' justifyContent='center' variant='green'>
									<Icon name='bookmark' color='white' />
									<Text variant='white'>Bookmarks</Text>
								</Paper>
								<Paper flexDirection='row' justifyContent='center' variant='orange'>
									<Icon name='assessment' color='white' />
									<Text variant='white'>Assessments</Text>
								</Paper>
							</View>
						</View>
					</Section>

					<Section>
						<Heading3 m={10}>
							Screens
						</Heading3>
						<Button
							text='Profile'
							onPress={onPressProfile}
						/>
					</Section>

					<Section>
						<Heading3 m={10}>
							Text Input
						</Heading3>
						<TextInput
							value={this.state.value}
							onChange={value => this.setState({ value })}
							placeholder='Type something...'
						/>
					</Section>
				</ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

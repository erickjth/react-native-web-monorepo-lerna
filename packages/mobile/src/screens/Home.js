import React, { Component } from 'react';
import SharedHome from 'shared/src/screens/Home';

export default class Home extends Component {
	static navigationOptions = {
		title: 'Home',
	};

	onPressProfile = () => {
		this.props.navigation.navigate('Profile');
	}

	render() {
		return (
			<SharedHome
				onPressProfile={this.onPressProfile}
			/>
		);
	}
}

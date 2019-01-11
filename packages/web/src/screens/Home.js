import React, { Component } from 'react';
import SharedHome from 'shared/src/screens/Home';

export default class Home extends Component {
	onPressProfile = () => {
		this.props.history.push('/profile');
	}

	render() {
		return (
			<SharedHome
				onPressProfile={this.onPressProfile}
			/>
		);
	}
}

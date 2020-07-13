import React from 'react';
import { ActivityIndicator } from 'react-native';
import Container from 'monorepo-shared/src/components/layout/Container';

export default class LoadingScreen extends React.Component {
	constructor(props) {
		super(props);
		this.bootstrap();
	}

	bootstrap = async () => {
		// @TODO check authentication, and other stuff.
		await new Promise(resolve => setTimeout(resolve, 500));

		this.props.navigation.navigate('Main');
	};

	render() {
		return (
			<Container
				flex={1}
				justifyContent='center'
				alignItems='center'
			>
				<ActivityIndicator />
			</Container>
		);
	}
}

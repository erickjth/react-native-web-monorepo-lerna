import React, { PureComponent } from 'react';
import Container from 'monorepo-shared/src/components/layout/Container';
import Text from 'monorepo-shared/src/components/primitives/Text';

export default class ProfileScreen extends PureComponent {
	render() {
		return (
			<Container
				flex={1}
				justifyContent='center'
				alignItems='center'
			>
				<Text variant='h4'>
					Profile Goes Here!!!
				</Text>
			</Container>
		);
	}
}

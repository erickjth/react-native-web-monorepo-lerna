import React, { Component } from 'react';
import Text, { Heading3 } from '../components/primitives/Text';
import View from '../components/primitives/View';
import Container from '../components/layout/Container';
import Touchable from '../components/primitives/Touchable';
import Icon from '../components/common/Icon';
import Paper from '../components/common/Paper';

class Home extends Component {
	render() {
		return (
			<Container
				flex={1}
				justifyContent='flex-start'
				px={20}
				py={20}
			>
				<Heading3 m={10}>Home</Heading3>

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
			</Container>
		);
	}
}

export default Home;

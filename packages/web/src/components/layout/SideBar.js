import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import View from 'monorepo-shared/src/components/primitives/View';
import Text from 'monorepo-shared/src/components/primitives/Text';
import Touchable from 'monorepo-shared/src/components/primitives/Touchable';
import Icon from 'monorepo-shared/src//components/common/Icon';

const Wrapper = styled(View)`
	padding-top: 40px;
	background-color: ${({ theme }) => theme.colors.sideBar}
	width: 250px;
`;

class SideBar extends PureComponent {
	render() {
		const { location, history } = this.props;

		if (location.pathname === '/') return null;

		return (
			<Wrapper>
				<Touchable
					px={20}
					py={20}
					flexDirection='row'
					onPress={() => history.push('/')}
				>
					<Icon name='home' color='white' />
					<Text variant='white'>
						Home
					</Text>
				</Touchable>
			</Wrapper>
		);
	}
}

export default withRouter(SideBar);

import React, { PureComponent } from 'react';
import { Header as NavigationHeader } from 'react-navigation';
import get from 'lodash/get';
import Container from 'shared/src/components/layout/Container';

class Header extends PureComponent {
	render() {
		const { title, ...restProps } = this.props;

		const sceneTitle = get(restProps, 'scene.descriptor.options.title', title);

		return (
			<Container>
				<NavigationHeader title={sceneTitle} {...restProps} />
			</Container>
		);
	}
}

export default Header;

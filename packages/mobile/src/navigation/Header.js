import React, { Component } from 'react';
import { Header as NavigationHeader } from 'react-navigation-stack';
import withTheme, { variant } from 'monorepo-shared/src/styles/withTheme';

class Header extends Component {
	render() {
		const { theme, scene, ...restProps } = this.props;

		const constainerStyles = variant({ key: 'constainers' })({ theme, variant: 'default' });

		const newScene = {
			...scene,
			descriptor: {
				...scene.descriptor,
				options: {
					...scene.descriptor.options,
					headerStyle: {
						...scene.descriptor.options.headerStyle,
						...constainerStyles
					}
				}
			}
		};

		return (
			<NavigationHeader
				scene={newScene}
				{...restProps}
			/>
		);
	}
}

export default withTheme(Header);

import React, { PureComponent } from 'react';
import { StatusBar, Dimensions, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Header as NavigationHeader, HeaderStyleInterpolators } from 'react-navigation-stack';
import { getDefaultHeaderHeight } from 'react-navigation-stack/lib/commonjs/vendor/views/Header/HeaderSegment';
import Container from 'monorepo-shared/src/components/layout/Container';

const IOS_STATUS_BAR_HEIGHT = 20;
const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? IOS_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT;

class Header extends PureComponent {
	getHeaderProps = () => {
		const { title, navigation, ...rest } = this.props;

		const route = {
			key: 'internal-header-screen',
			params: undefined,
			routeName: '',
		};

		const statusBarHeight = Platform.OS === 'ios' ? 0 : (STATUS_BAR_HEIGHT + 8);

		const headerProps = {
			insets: {
				bottom: 0,
				left: 0,
				right: 0,
				top: getDefaultHeaderHeight(Dimensions.get('window'), false) - statusBarHeight
			},
			layout: {},
			navigation,
			scene: {
				route,
				descriptor: {
					key: route.key,
					navigation,
					state: route,
					options: {
						headerTitle: () => title,
						headerBackTitle: null,
						...rest
					}
				},
				progress: {}
			},
			styleInterpolator: HeaderStyleInterpolators.forNoAnimation
		};

		return headerProps;
	}

	render() {
		return (
			<Container>
				<NavigationHeader {...this.getHeaderProps()} />
			</Container>
		);
	}
}

export default withNavigation(Header);

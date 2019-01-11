import React from 'react';
import { Platform } from 'react-native';
import Header from '../components/navBar/Header';
import HeaderTitle from '../components/navBar/HeaderTitle';
import HeaderBackImage from '../components/navBar/HeaderBackImage';

const majorVersionIOS = parseInt(Platform.Version, 10);

const defaultOptions = {};

// Disable ReactNavigation SafeAreaView for new iOS versions and android.
if (majorVersionIOS >= 11 || Platform.OS === 'android') {
	defaultOptions.headerForceInset = {
		bottom: 'never',
		top: 'never',
		left: 'never',
		right: 'never',
	};
}

const navigationOptions = {
	headerStyle: {
		borderBottomWidth: 0,
		backgroundColor: 'transparent',
	},
	headerBackTitle: null,
	header: props => <Header {...props} />,
	headerTitle: props => <HeaderTitle {...props} />,
	headerBackImage: props => <HeaderBackImage {...props} />,
	...defaultOptions
};

export default navigationOptions;

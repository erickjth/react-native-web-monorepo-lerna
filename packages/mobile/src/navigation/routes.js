import React from 'react'; // eslint-disable-line no-unused-vars
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import defaultNavigationOptions from './navigationOptions';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import ProfileScreen from '../screens/Profile';

export const MainStack = createStackNavigator({
	Home: HomeScreen,
	Profile: ProfileScreen,
}, {
	initialRouteName: 'Home',
	defaultNavigationOptions
});

/**
 * Root
 */
export const RootStack = createSwitchNavigator({
	Loading: LoadingScreen,
	Main: MainStack,
}, {
	initialRouteName: 'Main'
});

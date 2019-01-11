import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import MainWrapper from 'shared/src/components/layout/MainWrapper';
import AppNavigator from './navigation/AppNavigator';

export default class App extends Component {
	render() {
		return (
			<MainWrapper>
				<AppNavigator />
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				/>
			</MainWrapper>
		);
	}
}

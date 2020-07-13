import React from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import MainWrapper from 'monorepo-shared/src/components/layout/MainWrapper';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<MainWrapper>
				<AppNavigator />
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				/>
			</MainWrapper>
		</SafeAreaProvider>
	);
}

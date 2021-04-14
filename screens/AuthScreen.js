import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from './auth/LoginScreen';

export function AuthScreen(props: any) {
	const StackNavigator = createStackNavigator();

	return (
		<StackNavigator.Navigator screenOptions={{headerShown: false}}>
			<StackNavigator.Screen component={LoginScreen} name='Login' />
		</StackNavigator.Navigator>
	);
}
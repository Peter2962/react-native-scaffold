import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect, useCallback } from 'react';

// screens
import {AuthScreen} from './AuthScreen';
import {DashboardScreen} from './DashboardScreen';
// end screens

const StackNavigator = createStackNavigator();
export function EntryScreen(props: any) {
	const properties = props.route.params;
	let defaultRoute = 'Auth';

	// If user is authenticated, load the 'Dashboard' screen. If not, load the 'Auth' screen.
	if (properties.userAuthenticated) {
		defaultRoute = 'Dashboard';
	}

	return (
		<StackNavigator.Navigator initialRouteName={defaultRoute}>
			<StackNavigator.Screen component={AuthScreen} name='Auth' options={{headerShown: false}} />
			<StackNavigator.Screen component={DashboardScreen} name='Dashboard' options={{headerShown: false}} />
		</StackNavigator.Navigator>
	);
}
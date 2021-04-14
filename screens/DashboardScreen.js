import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/dashboard/ProfileScreen';
import MainScreen from '../screens/dashboard/MainScreen';

export function DashboardScreen(props: any) {
	const TabNavigator = createBottomTabNavigator();

	function getIcon(iconName, size, color, focused) {
		return ({}) => {
			return <Ionicons name={iconName} size={size} color={color} />;
		}
	}

	return (
		<TabNavigator.Navigator initialRouteName='Dashboard.Main'>
			<TabNavigator.Screen name='Dashboard.Profile' component={ProfileScreen} options={{title: 'Profile', tabBarIcon: getIcon('person', 25) }} />
			<TabNavigator.Screen name='Dashboard.Main' component={MainScreen} options={{title: 'Recents', tabBarIcon: getIcon('time', 25)}} />
		</TabNavigator.Navigator>
	);
}
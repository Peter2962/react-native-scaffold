import Store from './store/Store';
import {Provider} from 'react-redux';
import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as ExpoSplashScreen from 'expo-splash-screen';
import {createTabNavigator} from '@react-navigation/tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Screens
import {EntryScreen} from './screens/EntryScreen';
// End Screens

const StackNavigator = createStackNavigator();

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false);
	const [userAuthenticated, setUserAuthenticated] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				// We prevent the splash screen from auto hiding here.
				await ExpoSplashScreen.preventAutoHideAsync();

				// Timeout placed in-between the preventAutoHideAsync method and hideAsync method
				await new Promise(resolve => setTimeout(resolve, 2000));
			}catch (e) {
				//
			}finally{
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	if (!appIsReady) {
		return null;
	}else{
		ExpoSplashScreen.hideAsync();
	}

	const initialState = {
		appIsReady,
		userAuthenticated
	};

	// We're loading only the EntryScreen here because our auth logic will be in the useEffect above
	return (
		<Provider store={Store}>
			<NavigationContainer>
				<StackNavigator.Navigator initialRouteName='Entry'>
					<StackNavigator.Screen component={EntryScreen} name='Entry' initialParams={initialState} options={{headerShown: false}} />
				</StackNavigator.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import { Avatar, Badge, Input, withBadge, ThemeProvider} from 'react-native-elements';

const logo = require('../../res/logo-1.png');
const theme = {

};

export function LoginScreen(props: any) {
	return (
		<ThemeProvider theme={theme}>
			<View style={styles.container}>
				<Image source={logo} style={styles.logo} />
				<Input placeholder='Email' />
			</View>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		width: '100%',
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		width: 45,
		height: 45,
		resizeMode: 'stretch'
	}
});
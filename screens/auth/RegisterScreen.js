import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class RegisterScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Register</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: '#ddd',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
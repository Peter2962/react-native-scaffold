import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Header(props) {
	const { containerStyle, textStyle } = styles;
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	containerStyle: {
		width: '100%',
		height: 90,
		backgroundColor: '#ffffff',
		elevation: 2,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textStyle: {
		color: '#000000',
		fontSize: 20,
		marginTop: 30,
		alignSelf: 'center',
		fontWeight: 'bold'
	}
});
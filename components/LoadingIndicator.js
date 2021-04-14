import { Overlay } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export function LoadingIndicator(props) {
	console.log(props);
	return(
		<View style={styles.container}>
			<View style={styles.overlay}>
				<ActivityIndicator key={true} animating={true} size='large' color='#000000' style={{opacity: 1}} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: '#ffffff'
	},
	overlay: {
		alignSelf: 'center',
	}
});
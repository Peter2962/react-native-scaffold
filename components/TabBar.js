import React from 'react';
import { Icon } from '../components/Icon';
import { colors, defaultPadding } from '../Theme';
import { View, Text, StyleSheet } from 'react-native';

export function TabBar(props) {
	return (
		<View style={styles.container}>
			<Icon iconName='time-outline' size={32} containerStyle={{flex: 1, display: 'flex'}} />
			<Icon iconName='person-outline' size={32} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 60,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		padding: defaultPadding,
		paddingLeft: '20%',
		paddingRight: '20%',
		borderTopWidth: 1,
		borderTopColor: colors.secondary,
		backgroundColor: colors.tertiary
	}
});
import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function GetIcon(props) {
	return (
		<View styles={props.containerStyle}>
			<Ionicons name={props.iconName} size={props.size} color={props.color} />
		</View>
	);
}
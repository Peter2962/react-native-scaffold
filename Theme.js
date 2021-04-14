import {StyleSheet, PixelRatio} from 'react-native';

export const defaultPadding = 30 / PixelRatio.get();
export const defaultLeftPadding = 60 / PixelRatio.get();
export const defaultRightPadding = 60 / PixelRatio.get();
export const props = StyleSheet.create({
	fullWidth: {
		width: '100%'
	}
});
export function toPixels (num) {
	return num / PixelRatio.get();
};
export const colors = {
	primary: '#000000',
	secondary: '#a6a6a6',
	tertiaryColor: '#e56c6c'
}
export const typography = {
	h1FontSize: toPixels(70),
	h2FontSize: toPixels(55),
	h3FontSize: toPixels(49),
	h4FontSize: toPixels(39)
};
export const defaultButtonContainer = {
	borderBottomLeftRadius: 10,
	borderBottomRightRadius: 10,
	borderTopRightRadius: 10,
	borderTopLeftRadius: 10,
	overflow: 'hidden'
};
export const buttonHeight = 50;

export const themeCompiled = {
	colors: {
		primary: colors.primary
	},
	Button: {

	}
};
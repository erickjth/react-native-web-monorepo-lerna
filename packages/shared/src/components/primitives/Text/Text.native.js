import React from 'react';
import { Text as TextNative } from 'react-native';

const accessibilityTraitsToRole = {
	slider: 'adjustable',
	button: 'button',
	heading: 'header',
	img: 'image',
	link: 'link',
	presentation: 'none',
	search: 'search',
	region: 'summary'
};

const Text = ({ accessibilityRole, ...rest }) => (
	<TextNative
		accessibilityRole={accessibilityTraitsToRole[accessibilityRole] || undefined}
		{...rest}
	/>
);

export default Text;

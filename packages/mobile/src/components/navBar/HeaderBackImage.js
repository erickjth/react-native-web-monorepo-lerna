import React, { PureComponent } from 'react';
import {
	I18nManager,
	Platform,
	StyleSheet,
} from 'react-native';
import Icon from 'shared/src/components/common/Icon';

class HeaderBackImage extends PureComponent {
	render() {
		// eslint-disable-next-line no-unused-vars
		const { tintColor, title, ...rest } = this.props;

		return (
			<Icon
				name='keyboard-backspace'
				style={styles.icon}
				{...rest}
			/>
		);
	}
}

const styles = StyleSheet.create({
	icon: Platform.OS === 'ios' ? {
		backgroundColor: 'transparent',
		height: 21,
		width: 24,
		marginLeft: 9,
		marginRight: 22,
		marginVertical: 12,
		transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
	} : {
		height: 24,
		width: 24,
		margin: 3,
		backgroundColor: 'transparent',
		transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
	},
});

export default HeaderBackImage;

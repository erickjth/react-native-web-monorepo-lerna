import React, { PureComponent } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { withTheme } from 'styled-components';

class Icon extends PureComponent {
	render() {
		const { theme, color: _color, ...rest } = this.props;

		const color = _color || theme.colors.icon;

		return (
			<MaterialIcon color={color} {...rest} />
		);
	}
}

Icon.defaultProps = {
	size: 24
};

export default withTheme(Icon);

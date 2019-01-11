import React, { PureComponent } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class Icon extends PureComponent {
	render() {
		return (
			<MaterialIcon {...this.props} />
		);
	}
}

Icon.defaultProps = {
	size: 24
};

export default Icon;

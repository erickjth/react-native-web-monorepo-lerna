import React, { PureComponent } from 'react';
import MaterialIcon from 'material-icons-react';

class Icon extends PureComponent {
	render() {
		const { name: _name, ...rest } = this.props;

		// To be compatible with RNVectorIcons, dashes (-) need to be replace by underscores(_)
		const name = _name.replace(/-/g, '_');

		return (
			<MaterialIcon icon={name} {...rest} />
		);
	}
}

Icon.defaultProps = {
	size: 24
};

export default Icon;

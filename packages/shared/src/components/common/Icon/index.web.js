import React, { PureComponent } from 'react';
import MaterialIcon from 'material-icons-react';

class Icon extends PureComponent {
	render() {
		const { name, ...rest } = this.props;

		return (
			<MaterialIcon icon={name} {...rest} />
		);
	}
}

Icon.defaultProps = {
	size: 24
};

export default Icon;

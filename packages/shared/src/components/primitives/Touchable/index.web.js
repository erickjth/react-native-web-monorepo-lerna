import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native-web';
import { viewStyle } from '../../../styles';

const Wrapper = styled(View)`
	cursor: pointer;
	> p { margin: 0; }
	${viewStyle}
`;

const Touchable = ({ onPress, ...rest }) => (
	<Wrapper
		accessibilityRole="button"
		onClick={onPress} {...rest}
	/>
);

export default Touchable;

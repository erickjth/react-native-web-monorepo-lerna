import React from 'react';
import styled from 'styled-components';
import { viewStyle } from '../../../styles';

const Wrapper = styled.span`
	cursor: pointer;
	> p { margin: 0; }
	${viewStyle}
`;

const Touchable = ({ onPress, ...rest }) => (
	<Wrapper onClick={onPress} {...rest} />
);

export default Touchable;

import React from 'react';
import styled from 'styled-components';
import { buttonContainerStyle, buttonTextStyle } from '../../../styles';

const Button = ({ onPress, text, ...rest }) => (
	<StyledButton onClick={onPress} {...rest}>
		{text}
	</StyledButton>
);

Button.defaultProps = {
	variant: 'primary'
};

const StyledButton = styled.button`
	${buttonContainerStyle}
	${buttonTextStyle}
	cursor: pointer;
	:active {
		outline: none;
		border: none;
	}
	:focus {
		outline:0;
	}
`;

export default Button;

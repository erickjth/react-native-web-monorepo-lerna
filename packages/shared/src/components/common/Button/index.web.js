import React from 'react';
import styled from 'styled-components';
import { buttonContainerStyle, buttonTextStyle } from '../../../styles';

const StyledButton = styled.button.attrs({
	px: 3,
	py: 2,
	border: 0,
	borderRadius: 4,
	fontSize: 2,
	fontWeight: 'bold',
})`
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

const Button = ({
	onPress,
	text,
	...rest,
}) => (
	<StyledButton onClick={onPress} {...rest}>
		{text}
	</StyledButton>
);

Button.defaultProps = {
	variant: 'primary'
};

export default Button;

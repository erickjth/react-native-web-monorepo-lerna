import React from 'react';
import styled from 'styled-components';
import Touchable from '../../primitives/Touchable';
import Text from '../../primitives/Text';
import { buttonContainerStyle, buttonTextStyle } from '../../../styles';

const ButtonWrapper = styled(Touchable).attrs({
	px: 3,
	py: 2,
	border: 0,
	borderRadius: 4,
})`${buttonContainerStyle}`;

const ButtonText = styled(Text).attrs({
	fontSize: 2,
	fontWeight: 'bold',
	mb: 0,
	textAlign: 'center',
})`${buttonTextStyle}`;

const Button = ({
	onPress,
	text,
	variant,
	...rest,
}) => (
	<ButtonWrapper variant={variant} onPress={onPress} {...rest}>
		<ButtonText variant={variant}>
			{text}
		</ButtonText>
	</ButtonWrapper>
);

Button.defaultProps = {
	variant: 'primary',
};

export default Button;

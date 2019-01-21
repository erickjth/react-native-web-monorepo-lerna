import React from 'react';
import styled from 'styled-components';
import Touchable from '../../primitives/Touchable';
import Text from '../../primitives/Text';
import { buttonContainerStyle, buttonTextStyle } from '../../../styles';

const Button = ({ onPress, text, variant, ...rest }) => (
	<ButtonWrapper variant={variant} onPress={onPress} {...rest}>
		<ButtonText variant={variant}>
			{text}
		</ButtonText>
	</ButtonWrapper>
);

Button.defaultProps = {
	variant: 'primary',
};

const ButtonWrapper = styled(Touchable)`${buttonContainerStyle}`;
const ButtonText = styled(Text)`${buttonTextStyle}`;

export default Button;

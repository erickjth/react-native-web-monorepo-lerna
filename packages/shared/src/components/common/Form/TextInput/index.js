import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import View from '../../../primitives/View';
import { Paragraph } from '../../../primitives/Text';
import TextInput, { extraStyle } from './TextInput';

import { inputStyle, inputStyleWrapper } from '../../../../styles';

class Input extends PureComponent {
	static propTypes = {
		onChange: PropTypes.func,
		onBlur: PropTypes.func,
		onFocus: PropTypes.func,
	};

	inputRef = React.createRef()
	getInput = () => this.inputRef.current;
	onBlur = (e) => this.props.onBlur && this.props.onBlur(e)
	onChange = (value) => this.props.onChange && this.props.onChange(value)
	onFocus = (e) => this.props.onFocus && this.props.onFocus(e)

	render() {
		const {
			theme,
			active,
			error,
			disabled,
			wrapperProps,
			wrapperStyle,
			last,
			...rest
		} = this.props;

		delete rest.onChange;
		delete rest.onBlur;

		return (
			<InputWrapper
				last={last}
				style={wrapperStyle}
				{...wrapperProps}
			>
				<InputPrimitive
					ref={this.inputRef}
					placeholderTextColor={theme.colors.dimmed}
					onChangeText={this.onChange}
					onEndEditing={this.onBlur}
					keyboardType='default'
					underlineColorAndroid='transparent'
					autoCapitalize='sentences'
					editable={!disabled}
					active={active || undefined}
					error={error || undefined}
					disabled={disabled}
					autoCorrect
					{...rest}
				/>
				{error && <Paragraph error >{error}</Paragraph>}
			</InputWrapper>
		);
	}
}

const InputPrimitive = styled(TextInput)`
	${inputStyle}
	${extraStyle}
`;

const InputWrapper = styled(View)`
	${inputStyleWrapper}
`;

export default withTheme(Input);

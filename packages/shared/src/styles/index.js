import { css } from 'styled-components';
import {
	space,
	width,
	lineHeight,
	fontSize,
	fontWeight,
	textAlign,
	color,
	flex,
	order,
	alignSelf,
	flexWrap,
	flexDirection,
	alignItems,
	justifyContent,
	buttonStyle as buttonStyleVariant,
	variant,
	borders,
	borderColor,
	borderRadius,
} from 'styled-system';

const viewStyle = css`
	display: flex;
	flex-direction: column;
	${space}
	${width}
	${color}
	${flex}
	${order}
	${alignSelf}
	${flexWrap}
	${flexDirection}
	${alignItems}
	${justifyContent}
	${borders}
	${borderColor}
	${borderRadius}
`;

const constainerStyles = variant({ key: 'constainers' });

const containerStyle = css`
	display: flex;
	${space}
	${width}
	${constainerStyles}
	${flex}
	${order}
	${alignSelf}
	${flexWrap}
	${flexDirection}
	${alignItems}
	${justifyContent}
`;

const mainWrapperStyle = css`
	flex: 1;
	${space}
	${width}
	${constainerStyles}
`;

const textStyles = variant({ key: 'texts' });

const headingStyles = variant({ key: 'heading' });

const textStyle = css`
	font-family: ${props => props.theme.fonts.regular};
	margin: 0;
	color: ${props => props.theme.colors.text};
	${space}
	${fontSize}
	${fontWeight}
	${textAlign}
	${lineHeight}
	${color}
	${textStyles}
	${headingStyles}
`;

const headingStyle = css`
	font-family: ${props => props.theme.fonts.bold};
	${textStyle}
`;

const paragraphStyle = css`
	font-family: ${props => props.theme.fonts.regular};
	${textStyle}
`;

const buttonContainerStyle = css`
	padding: 8px 4px;
	border: 0;
	border-radius: 4px;
	${buttonStyleVariant}
`;

const buttonTextStyle = css`
	font-family: ${props => props.theme.fonts.bold};
	font-size: 16px;
	margin-bottom: 0;
	text-align: center;
	${space}
	${textAlign}
	${buttonStyleVariant}
`;

const paperStylesVariant = variant({ key: 'paper' });

const paperStyle = css`
	margin: 3px;
	padding: 10px;
	border: 0;
	border-radius: 4px;
	align-items: center;
	justify-content: center;
	${paperStylesVariant}
`;

const inputStyleWrapper = css`
	${space}
`;

const inputStyle = css`
	width: 100%;
	min-height: 40px;
	height: 40px;
	padding: 0px;
	background-color: transparent;
	font-family: ${props => props.theme.fonts.regular};
	font-size: 16px;
	line-height: 16px;
	color: ${({ theme, error, warning, disabled }) => (
		(error && theme.colors.error) ||
		(warning && theme.colors.warning) ||
		(disabled && theme.colors.dimmed) ||
		theme.colors.text
	)};
	border-bottom-width: 1px;
	border-bottom-color: ${({ theme, active, error, warning, disabled }) => (
		(active && theme.colors.primary) ||
		(error && theme.colors.error) ||
		(warning && theme.colors.warning) ||
		(disabled && theme.colors.dimmed) ||
		theme.colors.primary
	)};
`;

export {
	viewStyle,
	textStyle,
	headingStyle,
	paragraphStyle,
	containerStyle,
	buttonContainerStyle,
	buttonTextStyle,
	paperStyle,
	mainWrapperStyle,
	inputStyleWrapper,
	inputStyle,
};

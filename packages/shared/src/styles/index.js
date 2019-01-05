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

const textStyles = variant({ key: 'texts' });

const headingStyles = variant({ key: 'heading' });

const textStyle = css`
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
	color: ${props => props.theme.colors.text};
	${textStyle}
`;

const paragraphStyle = css`
	font-family: ${props => props.theme.fonts.regular};
	margin-bottom: 10px;
	color: ${props => props.theme.colors.text};
	${textStyle}
`;

const buttonContainerStyle = css`
	${space}
	${width}
	${borders}
	${borderColor}
	${borderRadius}
	${buttonStyleVariant}
`;

const buttonTextStyle = css`
	font-family: ${props => props.theme.fonts.regular};
	${color}
	${lineHeight}
	${fontSize}
	${fontWeight}
	${textAlign}
	${buttonStyleVariant}
`;

export {
	viewStyle,
	textStyle,
	headingStyle,
	paragraphStyle,
	containerStyle,
	buttonContainerStyle,
	buttonTextStyle,
};

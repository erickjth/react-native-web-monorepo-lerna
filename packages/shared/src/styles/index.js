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
	variant
} from 'styled-system';

const viewStyle = css`
	display: flex;
	${space}
	${width}
	${color}
	${fontSize}
	${color}
	${flex}
	${order}
	${alignSelf}
	${flexWrap}
	${flexDirection}
	${alignItems}
	${justifyContent}
`;

const textStyles = variant({ key: 'texts' })

const textStyle = css`
	${space}
	${fontSize}
	${fontWeight}
	${textAlign}
	${lineHeight}
	${color}
	${textStyles}
`;

const headingStyles = variant({ key: 'heading' })

const headingStyle = css`
	font-family: ${props => props.theme.fonts.bold};
	${textStyle}
	${headingStyles}
`;

const paragraphStyle = css`
	font-family: ${props => props.theme.fonts.regular};
	${textStyle}
`;

export {
	viewStyle,
	textStyle,
	headingStyle,
	paragraphStyle
};

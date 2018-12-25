import styled from 'styled-components';
import { Text } from 'react-primitives';
import { headingStyle } from '../../styles';

export const Heading = styled(Text)`
	${headingStyle}
`;

export const Heading1 = styled(Text).attrs({
	variant: 'h1'
})`
	${headingStyle}
`;

export const Heading2 = styled(Text).attrs({
	variant: 'h2'
})`
	${headingStyle}
`;

export const Heading3 = styled(Text).attrs({
	variant: 'h3'
})`
	${headingStyle}
`;

export const Heading4 = styled(Text).attrs({
	variant: 'h4'
})`
	${headingStyle}
`;

export const Heading5 = styled(Text).attrs({
	variant: 'h5'
})`
	${headingStyle}
`;

export const Heading6 = styled(Text).attrs({
	variant: 'h6'
})`
	${headingStyle}
`;

export default Heading;

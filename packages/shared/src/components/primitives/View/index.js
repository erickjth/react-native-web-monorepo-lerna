import styled from 'styled-components';
import { View } from 'react-primitives';
import { viewStyle } from '../../../styles';

export const StyledView = styled(View).attrs({
	flexDirection: 'column', // Make column by default to be compatible with RN
})`
	${viewStyle}
`;

export default StyledView;

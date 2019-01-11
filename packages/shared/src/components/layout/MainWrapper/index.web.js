/* eslint-disable no-multi-spaces */
import styled from 'styled-components';
import View from '../../primitives/View';
import { mainWrapperStyle } from '../../../styles';

const MainWrapper = styled(View)`
	align-items: center;
	${mainWrapperStyle}
`;

MainWrapper.defaultProps = {
	variant: 'default'
};

export default MainWrapper;

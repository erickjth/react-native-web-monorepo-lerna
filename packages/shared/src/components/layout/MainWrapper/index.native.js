import React from 'react';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
import View from '../../primitives/View';
import { mainWrapperStyle } from '../../../styles';

const StyledSafeAreaView = styled(SafeAreaView)`
	${mainWrapperStyle}
`;

StyledSafeAreaView.defaultProps = {
	variant: 'default',
};

const MainWrapper = (props) => {
	return (
		<View flex={1} {...props} />
	);
};

export default MainWrapper;

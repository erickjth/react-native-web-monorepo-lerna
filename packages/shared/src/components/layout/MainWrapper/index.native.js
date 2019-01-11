import React from 'react';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
import { mainWrapperStyle } from '../../../styles';

const StyledSafeAreaView = styled(SafeAreaView)`
	${mainWrapperStyle}
`;

StyledSafeAreaView.defaultProps = {
	variant: 'default',
};

const MainWrapper = (props) => {
	return (
		<StyledSafeAreaView
			{...props}
		/>
	);
};

export default MainWrapper;

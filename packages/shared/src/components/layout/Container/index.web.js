import styled from 'styled-components';
import View from '../../primitives/View';
import { containerStyle } from '../../../styles';

const Container = styled(View).attrs(() => ({
	width: [0.9, 0.5]
}))`${containerStyle}`;

Container.defaultProps = {
	variant: 'default'
};

export default Container;

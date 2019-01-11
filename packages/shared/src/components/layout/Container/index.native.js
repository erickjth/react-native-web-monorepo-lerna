import styled from 'styled-components';
import View from '../../primitives/View';
import { containerStyle } from '../../../styles';

const Container = styled(View)`${containerStyle}`;

Container.defaultProps = {
	variant: 'default'
};

export default Container;

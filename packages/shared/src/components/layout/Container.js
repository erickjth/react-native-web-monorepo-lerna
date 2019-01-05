import styled from 'styled-components';
import View from '../primitives/View';
import { containerStyle } from '../../styles';

const Container = styled(View).attrs(() => ({
	variant: 'default'
}))`${containerStyle}`;

export default Container;

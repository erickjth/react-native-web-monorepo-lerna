import styled from 'styled-components';
import { Text } from 'react-primitives';
import { textStyle, headingStyle, paragraphStyle } from '../../../styles';

export const Heading = styled(Text).attrs({ variant: 'h1', as: 'h1' })`${headingStyle}`;
export const Heading2 = styled(Text).attrs({ variant: 'h2', as: 'h2' })`${headingStyle}`;
export const Heading3 = styled(Text).attrs({ variant: 'h3', as: 'h3' })`${headingStyle}`;
export const Heading4 = styled(Text).attrs({ variant: 'h4', as: 'h4' })`${headingStyle}`;
export const Heading5 = styled(Text).attrs({ variant: 'h5', as: 'h5' })`${headingStyle}`;
export const Heading6 = styled(Text).attrs({ variant: 'h6', as: 'h6' })`${headingStyle}`;
export const Paragraph = styled(Text).attrs({ as: 'p' })`${paragraphStyle}`;
export const DefaultText = styled(Text).attrs({ as: 'p' })`${textStyle}`;

export default DefaultText;

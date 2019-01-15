import { TextInput } from 'react-native-web';
import { css } from 'styled-components';

export default TextInput;

export const extraStyle = css`
	:focus { outline: none; }
	::placeholder {
		color: ${({ theme }) => theme.colors.dimmed};
		font-size: 16px;
	}
`;

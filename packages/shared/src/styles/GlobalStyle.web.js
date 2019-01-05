import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Lato-Bold';
		src: url('../../assets/fonts/Lato/Lato-Bold.woff2') format('woff2'),
			url('../../assets/fonts/Lato/Lato-Bold.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Lato-Bold';
		src: url('../../assets/fonts/Lato/Lato-BoldItalic.woff2') format('woff2'),
			url('../../assets/fonts/Lato/Lato-BolddItalic.woff') format('woff');
		font-weight: normal;
		font-style: italic;
	}

	@font-face {
		font-family: 'Lato-Regular';
		src: url('../../assets/fonts/Lato/Lato-Regular.woff2') format('woff2'),
			url('../../assets/fonts/Lato/Lato-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Lato-Regular';
		src: url('../../assets/fonts/Lato/Lato-Italic.woff2') format('woff2'),
			url('../../assets/fonts/Lato/Lato-Italic.woff') format('woff');
		font-weight: normal;
		font-style: italic;
	}

	@font-face {
		font-family: 'Lato-Light';
		src: url('../../assets/fonts/Lato/Lato-Light.woff2') format('woff2'),
			url('../../assets/fonts/Lato/Lato-Light.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Lato-Light';
		src: url('../../assets/fonts/Lato/Lato-LightItalic.woff2') format('woff2'),
			url('../../assets/fonts/Lato/Lato-LightItalic.woff') format('woff');
		font-weight: normal;
		font-style: italic;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: "Lato-Regular", "Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	#root {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}
`;

export default GlobalStyle;

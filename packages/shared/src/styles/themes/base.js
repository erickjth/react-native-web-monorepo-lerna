const fontSizes = [12, 14, 16, 20, 24, 36, 48, 80, 96];

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const fonts = {
	regular: 'Lato-Regular',
	bold: 'Lato-Bold',
	light: 'Lato-Light',
};

const breakpoints = ['40em', '52em', '64em'];

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export default {
	fontSizes,
	fontWeights,
	fonts,
	breakpoints,
	space,
	textStyles: {
		caps: {
			textTransform: 'uppercase',
			letterSpacing: '0.2em'
		}
	},
	// Variants
	heading: {
		h1: {
			margin: 0,
			marginBottom: space[3],
			fontSize: fontSizes[6],
		},
		h2: {
			margin: 0,
			marginBottom: space[3],
			fontSize: fontSizes[5],
		},
		h3: {
			margin: 0,
			marginBottom: space[3],
			fontSize: fontSizes[4],
		},
		h4: {
			margin: 0,
			marginBottom: space[3],
			fontSize: fontSizes[3],
		},
		h5: {
			margin: 0,
			marginBottom: space[3],
			fontSize: fontSizes[2],
		},
		h6: {
			marginTop: 0,
			marginBottom: space[3],
			fontSize: fontSizes[1],
		},
	},
};

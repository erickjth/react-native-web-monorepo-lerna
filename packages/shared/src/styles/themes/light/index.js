import colors from './colors';

const fontSizes = [12, 14, 16, 20, 24, 36, 48, 80, 96];

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const fonts = {
	regular: 'Lato-Regular',
	bold: 'Lato-Bold',
	light: 'Lato-Light',
};

const breakpoints = [32, 48, 64];

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const theme = {
	space,
	breakpoints,
	fonts,
	fontSizes,
	fontWeights,
	colors,
	colorStyles: {
	},

	textStyles: {
		caps: {
		  textTransform: 'uppercase',
		  letterSpacing: '0.2em'
		}
	},

	// Variants
	texts: {
		error: {
			color: colors.sucesss
		},
		warning: {
			color: colors.warning
		},
		error: {
			color: colors.error
		},
		active: {
			color: colors.primary
		},
	},

	heading: {
		h1: {
			fontSize: fontSizes[6],
		},
		h2: {
			fontSize: fontSizes[5]
		},
		h3: {
			fontSize: fontSizes[4]
		},
		h4: {
			fontSize: fontSizes[3]
		},
		h5: {
			fontSize: fontSizes[2]
		},
		h6: {
			fontSize: fontSizes[1]
		},
	},

	buttons: {
		primary: {
			color: colors.white,
			backgroundColor: colors.primary,
		},
		seconday: {
			color: colors.white,
			backgroundColor: colors.seconday,
		},
	}
}

export default theme;

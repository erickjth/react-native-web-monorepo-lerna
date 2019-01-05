import base from './base';

const colors = {
	primary: '#ff4256',
	seconday: '#f8972c',
	success: '#4BB543',
	warning: '#F18939',
	error: '#E44141',
	mirage: '#181925',
	steelGray: '#212130',
	comet: '#5b5d84',
	white: '#FFFFFF',
};

export default {
	...base,
	colors: {
		...colors,
		dimmed: colors.comet,
		icon: colors.primary,
		text: colors.white,
		heading: colors.comet,
	},

	colorStyles: {
		primary: colors.primary,
		warning: colors.warning,
		dimmed: colors.dimmed,
	},

	// Variants
	constainers: {
		default: {
			backgroundColor: colors.mirage,
		}
	},

	texts: {
		sucesss: {
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
		dimmed: {
			color: colors.dimmed,
		}
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
	},
};

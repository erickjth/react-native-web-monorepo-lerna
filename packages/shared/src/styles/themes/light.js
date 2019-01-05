import base from './base';

const colors = {
	primary: '#00CA9D',
	seconday: '#5F5D70',
	success: '#4BB543',
	warning: '#F18939',
	error: '#E44141',
	tuna: '#35343D',
	midGray: '#5F5D70',
	white: '#FFFFFF',
};


export default {
	...base,
	colors: {
		...colors,
		dimmed: colors.midGray,
		icon: colors.primary,
		text: colors.tuna,
		heading: colors.tuna,
	},

	colorStyles: {
		primary: colors.primary,
		warning: colors.warning,
		dimmed: colors.dimmed,
	},

	// Variants
	constainers: {
		default: {
			backgroundColor: colors.white,
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

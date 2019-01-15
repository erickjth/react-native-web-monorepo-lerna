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

	wildWatermelon: '#ff6677',
	mountainMeadow: '#19cb86',
	burningOrange: '#fe6f3d',
	scooter: '#43c7d7',
	sandyBrown: '#f1a758',
};

export default {
	...base,
	colors: {
		...colors,
		dimmed: colors.comet,
		icon: colors.white,
		text: colors.white,
		heading: colors.comet,
		sideBar: colors.wildWatermelon,
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
		},
		primary: {
			backgroundColor: colors.primary,
		},
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
		},
		white: {
			color: colors.white,
		}
	},

	buttons: {
		primary: {
			color: colors.white,
			backgroundColor: colors.primary,
		},
		secondary: {
			color: colors.white,
			backgroundColor: colors.seconday,
		},
	},

	paper: {
		primary: {
			backgroundColor: colors.primary,
		},
		seconday: {
			backgroundColor: colors.seconday,
		},
		red: {
			backgroundColor: colors.wildWatermelon,
		},
		green: {
			backgroundColor: colors.mountainMeadow,
		},
		blue: {
			backgroundColor: colors.scooter,
		},
		orange: {
			backgroundColor: colors.burningOrange,
		},
		yellow: {
			backgroundColor: colors.sandyBrown,
		},
	},
};

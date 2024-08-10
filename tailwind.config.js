/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			colors: {
				'PRIMARY_DARKEST': '#170F2E',
				'PRIMARY_DARKER': '#312163',
				'PRIMARY_DARK': '#5531A7',
				'PRIMARY_DEFAULT': '#9251F7',
				'PRIMARY_LIGHT': '#C696FC',
				'PRIMARY_LIGHTER': '#EFE2F9',
				'PRIMARY_LIGHTEST': '#F8F2FC',
				'SECONDARY_LIGHT': '#95AAFB',
				'SECONDARY_LIGHTER': '#E1E7FE',
				'SECONDARY_LIGHTEST': '#F5F7FF',
				'GRAY_DARKER': '#2E2E48',
				'GRAY_DEFAULT': '#79819A',
			},
		},
	},
	plugins: [],
}




/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			screens:{
				'2xl': '1530px',
				'3xl': '1800px'
			}
		},
	},
	plugins: [],
}




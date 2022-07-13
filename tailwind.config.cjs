/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'grid': 'url(\'/bg.svg\')'
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			screens: {
				mobileL: "425px",
				"3xl": "1600px",
			},
		},
	},
	plugins: [],
};

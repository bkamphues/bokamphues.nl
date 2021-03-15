module.exports = {
	purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		textShadow: {
			// defaults to {}
			default: "0 2px 5px rgba(0, 0, 0, 0.5)",
			lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
		},
		fontFamily: { sans: ["Inter", "sans-serif"] },
		extend: {
			colors: {
				primary: "#083D77",
				secondary: "#F9C22E",
				"primary-light": "#6CD4FF",
				rose: "#F56476",
				"rose-dark": "#E43F6F",
			},
			gradientColorStops: ["group-hover"],
			borderColor: ["group-hover"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("tailwindcss-typography")({
			// all these options default to the values specified here
			ellipsis: true, // whether to generate ellipsis utilities
			hyphens: true, // whether to generate hyphenation utilities
			kerning: true, // whether to generate kerning utilities
			textUnset: true, // whether to generate utilities to unset text properties
			componentPrefix: "c-", // the prefix to use for text style classes
		}),
	],
};

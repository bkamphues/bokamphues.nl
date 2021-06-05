/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path");

module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-source-filesystem`,
		`gatsby-transformer-sharp`,
	],
};

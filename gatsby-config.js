/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `49q8uaziiuba`,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-source-gravatar`,
			options: {
				emails: [process.env.GRAVATAR_EMAIL],
			},
		},
		{
			resolve: `gatsby-plugin-remote-images`,
			options: {
				nodeType: `gravatar`,
				imagePath: `url`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-image`,
	],
};

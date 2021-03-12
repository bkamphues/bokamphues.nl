/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path");

module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-plugin-netlify-cms`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/content/projects/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: path.join(__dirname, `static`, `assets`),
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `settings`,
				path: path.join(__dirname, `content`, `site_settings`),
			},
		},
	],
	siteMetadata: {
		title: "Bo Kamphues",
		titleTemplate: "%s · Bo Kamphues",
		description:
			"Personal portfolio, contact and blog website for Bo Kamphues.",
		url: "https://www.bokamphues.nl",
		imdbProfile: "https://www.imdb.com/name/nm6503731/?ref_=nv_sr_srsg_0",
	},
};

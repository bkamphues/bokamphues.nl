import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

// SEO function component to add metadata and SEO to every page
const SEO = ({ title, description, image, article }) => {
	const { pathname } = useLocation();
	const { site } = useStaticQuery(query);

	const {
		defaultTitle,
		titleTemplate,
		defaultDescription,
		siteUrl,
	} = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image}`,
		url: `${siteUrl}${pathname}`,
	};

	return <Helmet></Helmet>;
};

export default SEO;

// component API query
const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl: url
			}
		}
	}
`;

// component types
SEO.PropTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	article: PropTypes.bool,
};

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	article: false,
};

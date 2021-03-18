import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

// react component to add SEO to pages
const SEO = ({ title, description, article }) => {
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
		url: `${siteUrl}${pathname}`,
	};

	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate}>
			<meta name="description" content={seo.description} />
			{seo.url && <meta property="og:url" content={seo.url} />}
			{(article ? true : null) && <meta property="og:type" content="article" />}
			{seo.title && <meta property="og:title" content={seo.title} />}
			{seo.description && (
				<meta property="og:description" content={seo.description} />
			)}
			<meta name="twitter:card" content="summary" />
			{seo.title && <meta name="twitter:title" content={seo.title} />}
			{seo.description && (
				<meta name="twitter:description" content={seo.description} />
			)}
		</Helmet>
	);
};

export default SEO;

// query for site wide metadata
const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl
			}
		}
	}
`;

// component proptypes to force data types
SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	article: PropTypes.bool,
};

// default component proptypes
SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	article: false,
};

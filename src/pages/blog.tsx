import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogGrid from "../components/blog-grid";
import BlogCard from "../components/blog-card";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export const pageQuery = graphql`
query blogArticles {
	allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(articles)/.*\\.md$/"}}) {
	  edges {
		node {
		  frontmatter {
			thumbnail {
			  childImageSharp {
				gatsbyImageData
			  }
			}
			date
			slug
			tags
			title
		  }
		  excerpt
		}
	  }
	}
  }  
`;

export default function Blog({ data }) {
	const articles = data.allMarkdownRemark.edges;

	return (
		<Layout>
			<SEO title="Blog" description="Overview page of all my blog articles." />
			<div className="container mx-auto p-4 mb-5">
				<h1 className="py-4 text-4xl font-bold text-indigo-400">Articles</h1>
				<BlogGrid>
					{articles.map(article => (
						<BlogCard
							title={article.node.frontmatter.title}
							date={new Date(article.node.frontmatter.date)}
							link={article.node.frontmatter.slug}
							image={getImage(article.node.frontmatter.thumbnail)}
							imageAlt="Test"
							tags={article.node.frontmatter.tags}
						>
							{article.node.excerpt}
						</BlogCard>
					))}
				</BlogGrid>
			</div>
		</Layout>
	);
}

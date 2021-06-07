import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GatsbyImage } from "gatsby-plugin-image";

// react functional component for blogpost pages
export default function BlogPost({ data }): JSX.Element {
	// map the node to an easier to use variable
	const article = data.contentfulArticle.articleBody;

	// parse the raw rich-text string to an object
	const document = JSON.parse(article.raw);

	const options = {
		renderNode: {
			// render embedded assets to gatsby images
			[BLOCKS.EMBEDDED_ASSET]: node => {
				// find the corresponding reference through the contentful id
				// and return a <GatsbyImage/> component
				const image = article.references.find(
					({ contentful_id: id }) => id === node.data.target.sys.id
				);

				return (
					<div>
						<GatsbyImage
							image={image.gatsbyImageData}
							alt={image.title}
							className="rounded-xl shadow-sm"
						/>
						<p className="italic text-sm text-gray-500 my-2">
							{image.description}
						</p>
					</div>
				);
			},
			// render horizontal rules
			[BLOCKS.HR]: () => {
				return <hr className="border-gray-300 border rounded-xl my-8 mx-3" />;
			},
			// render H1 headings
			[BLOCKS.HEADING_1]: (node, children) => {
				return (
					<h1 className="text-5xl my-5 font-semibold text-indigo-900">
						{children}
					</h1>
				);
			},
			// render H2 headings
			[BLOCKS.HEADING_2]: (node, children) => {
				return (
					<h2 className="text-4xl my-5 font-semibold text-indigo-900">
						{children}
					</h2>
				);
			},
			// render H3 headings
			[BLOCKS.HEADING_3]: (node, children) => {
				return (
					<h3 className="text-3xl my-5 font-semibold text-indigo-900">
						{children}
					</h3>
				);
			},
			// render H4 headings
			[BLOCKS.HEADING_4]: (node, children) => {
				return (
					<h4 className="text-2xl my-5 font-semibold text-indigo-900">
						{children}
					</h4>
				);
			},
		},
	};

	// render the richt-text field
	return (
		<Layout>
			<div className="container mx-auto p-4 flex">
				<div className="p-6 w-3/4 bg-gray-200 mr-6 rounded-xl">
					<h1 className="text-6xl bold italic text-indigo-400 font-extrabold my-4 mx-8">
						{data.contentfulArticle.articleTitle}
					</h1>
					<div className="mx-8">
						{documentToReactComponents(document, options)}
					</div>
				</div>
				<div className="p-4 bg-gray-200 rounded-xl">
					This is a long test sentence to see how it looks.
				</div>
			</div>
		</Layout>
	);
}

// query for the corresponding article node using the articleSlug variable
export const query = graphql`
	query($slug: String!) {
		contentfulArticle(articleSlug: { eq: $slug }) {
			contentful_id
			articleTitle
			articleSlug
			articleBody {
				raw
				references {
					... on ContentfulArticle {
						contentful_id
					}
					... on ContentfulAsset {
						gatsbyImageData(placeholder: BLURRED)
						contentful_id
						description
						title
					}
				}
			}
		}
	}
`;

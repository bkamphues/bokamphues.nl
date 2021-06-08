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
		// renderMark: {
		// 	[MARKS.CODE]: (node, children) => {
		// 		return <code>{children}</code>;
		// 	},
		// },
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
			// render H5 headings
			[BLOCKS.HEADING_5]: (node, children) => {
				return (
					<h5 className="text-xl my-5 font-semibold text-indigo-900">
						{children}
					</h5>
				);
			},
			// render H6 headings
			[BLOCKS.HEADING_6]: (node, children) => {
				return (
					<h6 className="text-lg my-5 font-semibold text-indigo-900">
						{children}
					</h6>
				);
			},
			// render paragraphs
			[BLOCKS.PARAGRAPH]: (node, children) => {
				return <p className="my-4 leading-normal font-normal">{children}</p>;
			},
			// render ordered list
			[BLOCKS.OL_LIST]: (node, children) => {
				return <ol className="list-decimal list-outside px-8">{children}</ol>;
			},
			// render unordered list
			[BLOCKS.UL_LIST]: (node, children) => {
				return <ul className="list-disc list-outside px-8">{children}</ul>;
			},
			// render list item
			[BLOCKS.LIST_ITEM]: (node, children) => {
				return <li>{children}</li>;
			},
			// render block quote
			[BLOCKS.QUOTE]: (node, children) => {
				return (
					<blockquote className="relative p-4 text-xl italic border-l-4 bg-gray-100 text-gray-600 border-gray-500 quote">
						<div
							className="mr-2 text-gray-500 absolute top-4 leading-none text-xl"
							aria-hidden="true"
						>
							&ldquo;
						</div>
						<p>{children}</p>
					</blockquote>
				);
			},
		},
	};

	// render the richt-text field
	return (
		<Layout>
			<div className="container mx-auto p-4 flex">
				<div className="p-6 w-3/5 bg-gray-200 mr-6 rounded-xl">
					<h1 className="text-6xl bold italic uppercase text-indigo-400 font-extrabold my-4 mx-8">
						{data.contentfulArticle.articleTitle}
					</h1>
					<div className="mx-8">
						{documentToReactComponents(document, options)}
					</div>
				</div>
				<div>
					<div className="p-4 bg-gray-200 rounded-xl">
						This is a long test sentence to see how it looks.
					</div>
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

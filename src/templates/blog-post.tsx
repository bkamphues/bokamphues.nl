import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { GatsbyImage } from "gatsby-plugin-image";
import CodeBlock from "../components/code-block";
import { Link } from "gatsby";

// react functional component for blogpost pages
export default function BlogPost({ data }): JSX.Element {
	// map the node to an easier to use variable
	const article = data.contentfulArticle.articleBody;

	// parse the raw rich-text string to an object
	const document = JSON.parse(article.raw);

	const options = {
		renderMark: {
			[MARKS.CODE]: text => {
				return (
					<code className="text-indigo-400 bg-gray-700 shadow-sm p-1 rounded-md">
						{text}
					</code>
				);
			},
		},
		renderNode: {
			// render embedded entries
			[BLOCKS.EMBEDDED_ENTRY]: entry => {
				// find the corresponding reference through the contentful id
				const nodeID = entry.data.target.sys.id;
				const reference = article.references.find(
					({ contentful_id: id }) => id === nodeID
				);

				// render CodeBlocks
				if (reference.sys.contentType.sys.id == "codeBlock") {
					return (
						<CodeBlock
							className="rounded-md shadow-sm"
							language={reference.codeLanguage}
						>
							{reference.code.code}
						</CodeBlock>
					);
				} else {
					throw `Render function for ContentType ${reference.sys.contentType.sys.id} was not found!`;
				}
			},
			// render inline entries
			[INLINES.EMBEDDED_ENTRY]: entry => {
				// find the corresponding reference through the contentful id
				const nodeID = entry.data.target.sys.id;
				const reference = article.references.find(
					({ contentful_id: id }) => id === nodeID
				);

				// render CodeBlocks
				if (reference.sys.contentType.sys.id == "codeBlock") {
					return (
						<CodeBlock
							className="rounded-md shadow-sm"
							language={reference.codeLanguage}
						>
							{reference.code.code}
						</CodeBlock>
					);
				} else if (reference.sys.contentType.sys.id == "article") {
					return (
						<Link to={`/blog/${reference.articleSlug}`}>
							<div className="flex rounded-lg p-4 bg-gray-100 shadow-sm transition-transform transform hover:scale-105">
								<div>
									<h1 className="text-md uppercase text-indigo-400">
										{reference.articleTitle}
									</h1>
									<h2 className="text-sm italic text-gray-400">
										{`/blog/${reference.articleSlug}`}
									</h2>
								</div>
							</div>
						</Link>
					);
				} else {
					throw `Render function for ContentType ${reference.sys.contentType.sys.id} was not found!`;
				}
			},
			// render embedded assets to gatsby images
			[BLOCKS.EMBEDDED_ASSET]: node => {
				// find the corresponding reference through the contentful id
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
			<div className="container mx-auto p-4 flex flex-wrap sm:flex-nowrap">
				<div className="bg-gray-200 sm:mr-6 rounded-xl w-full sm:w-2/3">
					<GatsbyImage
						image={data.contentfulArticle.articleThumbnail.gatsbyImageData}
						alt={data.contentfulArticle.articleThumbnail.title}
						className="rounded-t-xl"
					/>
					<div className="mx-8 px-0.5 sm:px-6 pt-0.5 sm:pt-6">
						<h1 className="text-6xl  bold italic uppercase text-indigo-400 font-extrabold">
							{data.contentfulArticle.articleTitle}
						</h1>
						<section className="italic text-sm text-gray-400">
							<h2>Created at: {data.contentfulArticle.createdAt}</h2>
							<h2>Last updated: {data.contentfulArticle.updatedAt}</h2>
						</section>
					</div>
					<div className="mx-8 p-0.5 sm:p-6 ">
						{documentToReactComponents(document, options)}
					</div>
				</div>
				<div className="mt-4 sm:mt-0">
					<p className="p-4 bg-gray-200 rounded-xl">
						This is a long test sentence to see how it looks.
					</p>
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
			updatedAt(fromNow: true)
			createdAt(formatString: "YYYY-MM-DD HH:mm z")
			articleThumbnail {
				description
				title
				gatsbyImageData(placeholder: BLURRED)
			}
			articleBody {
				raw
				references {
					... on ContentfulArticle {
						contentful_id
						articleTitle
						articleSlug
						articleBody {
							raw
						}
						articleThumbnail {
							gatsbyImageData(placeholder: BLURRED, aspectRatio: 1)
							description
							title
						}
						sys {
							contentType {
								sys {
									id
								}
							}
						}
					}
					... on ContentfulAsset {
						gatsbyImageData(placeholder: BLURRED)
						contentful_id
						description
						title
						sys {
							type
						}
					}
					... on ContentfulCodeBlock {
						codeLanguage
						code {
							code
						}
						codeSnippetTitle
						contentful_id
						sys {
							contentType {
								sys {
									id
								}
							}
						}
					}
				}
			}
		}
	}
`;

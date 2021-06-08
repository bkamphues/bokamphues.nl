import React, { JSXElementConstructor, useEffect } from "react";
import Prism from "prismjs";

// ClodeBock Interface
interface ICodeBlock {
	language: string;
	children: string;
	className?: string;
}

// React component for displaying code snippets/blocks.
export default function CodeBlock(props: ICodeBlock) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<pre className={props.className}>
			<code className={`language-${props.language}`}>{props.children}</code>
		</pre>
	);
}

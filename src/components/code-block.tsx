import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// React component for displaying code snippets/blocks.
export default function CodeBlock(
	language: string,
	children: string
): JSX.Element {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<pre>
			<code className={`language-${language}`}>{children}</code>
		</pre>
	);
}

// function to test if the input string is a valid URL
// useful for link queries to decide between an internal or external link
export function validURL(link: string) {
	// link validation regex
	const pattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + //port
			"(\\?[;&amp;a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i"
	);

	// returns true if link is valid
	return pattern.test(link);
}

// function to truncate input string to N characters and end with a horizontal ellipsis
export function truncate(
	str: string,
	n: number,
	useWordBoundary: boolean = true
): string {
	// if the input string is equal to or smaller than given N, just return the entire string
	if (str.length <= n) {
		return str;
	}

	// if the input string is longer than N, check for word boundary and return string
	const subString = str.substr(0, n - 1);
	if (useWordBoundary) {
		return (
			subString.substr(0, subString.lastIndexOf(" ")) +
			String.fromCharCode(8230)
		);
	} else {
		return subString + String.fromCharCode(8230);
	}
}

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

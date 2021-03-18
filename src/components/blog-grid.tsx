import React from "react";
import BlogCard from "./blog-card";

interface BlogGridProps {}

interface BlogGridState {}

export default class BlogGrid extends React.Component<
	BlogGridProps,
	BlogGridState
> {
	// class constructor method
	constructor(props) {
		// super-call the input props
		super(props);
	}

	// class render method
	render() {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{this.props.children}
			</div>
		);
	}
}

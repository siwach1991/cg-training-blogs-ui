import React from "react";
import Link from "next/link";
import BlogList from "../components/blog/blog-list";

function HomePage() {
	return (
		<div>
			<h1>HomePage</h1>
			<h2>List of all Blogs</h2>
			<BlogList />
		</div>
	);
}

export default HomePage;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function BlogPage() {
	const [blog, setBlog] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const router = useRouter();
	const blogId = router.query.blogid;

	useEffect(() => {
		fetch(
			`https://us-central1-cg-myblog-api.cloudfunctions.net/api/blogs/getBlog/${blogId}`,
			{
				method: "GET",
				headers: {
					"api-key": "A098",
				},
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("HTTP Error from API");
				}
				return response.json();
			})
			.then((data) => {
				setBlog(data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (isLoading) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		);
	} else {
		return (
			<div>
				<h3>{blog.title}</h3>
				<h4>{blog.author}</h4>
				<p>{blog.body}</p>
			</div>
		);
	}
}

export default BlogPage;

import { useRouter } from "next/router";
import Link from "next/link";

function BlogItem(props) {
	const router = useRouter();
	const { id, title, author, body } = props.data;

	function exploreHandler() {
		const fullPath = `/blog/${id}`;
		router.push(fullPath);
	}

	return (
		<li>
			<div>
				<h3>{title}</h3>
				<h4>{author}</h4>
				<p>{body}</p>
				<Link href={`/blog/${id}`}>Explore</Link>
			</div>
		</li>
	);
}

export default BlogItem;

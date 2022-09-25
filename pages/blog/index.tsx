import { Posts } from 'components/Posts'
import { data } from 'data'
import { MainLayout } from 'layouts'
import { getAllPostsData } from 'lib/mdx'
import type { BlogPost } from 'lib/mdx'

export interface BlogIndexPageProps {
	posts: BlogPost[]
}

const BlogIndexPage = ({ posts }: BlogIndexPageProps) => (
	<MainLayout title={`${data.website.name} | Blog`}>
		<Posts posts={posts} />
	</MainLayout>
)

export function getStaticProps() {
	const posts = getAllPostsData()
	return { props: { posts } }
}

export default BlogIndexPage

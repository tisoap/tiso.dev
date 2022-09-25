import { MDXRemote } from 'next-mdx-remote'
import { BlogLayout } from 'layouts'
import { getBlogFiles, getPostBySlug } from 'lib/mdx'
import * as components from 'providers/MarkdownProvider'
import type { BlogPostWithMDX } from 'lib/mdx'
import type { GetStaticProps } from 'next'

import 'prism-themes/themes/prism-vsc-dark-plus.min.css'

export interface BlogPageProps {
	post: BlogPostWithMDX
}

const Blog = ({ post }: BlogPageProps) => {
	const { frontMatter, metadata, mdxSource } = post

	return (
		<BlogLayout frontMatter={frontMatter} metadata={metadata}>
			<MDXRemote {...mdxSource} components={components} />
		</BlogLayout>
	)
}

export function getStaticPaths() {
	const posts = getBlogFiles()

	return {
		paths: posts.map((post) => ({
			params: {
				slug: post.replace(/\.mdx/, ''),
			},
		})),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug
	if (!slug || typeof slug !== 'string') throw new Error('No slug')

	const post = await getPostBySlug(slug)
	return { props: { post } }
}

export default Blog

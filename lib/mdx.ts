import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import rehypePrismPlus from 'rehype-prism-plus'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { IReadTimeResults } from 'reading-time'

const rootFolder = process.cwd()
const dataFolder = path.join(rootFolder, 'data')
const blogFolder = path.join(dataFolder, 'blog')

export type PostFrontMatter = {
	title: string
	publishedAt: string
}

export type PostMetadata = {
	slug: string
	readingTime: IReadTimeResults
}

export interface BlogPost {
	content: string
	frontMatter: PostFrontMatter
	metadata: PostMetadata
}

export const getPostData = (filename: string) => {
	const filePath = path.join(blogFolder, filename)
	const source = fs.readFileSync(filePath, 'utf8')
	const { data, content } = matter(source)

	return {
		content,
		frontMatter: data,
		metadata: {
			slug: filename.replace('.mdx', ''),
			readingTime: readingTime(content),
		},
	} as BlogPost
}

export const getBlogFiles = () => fs.readdirSync(blogFolder)

export const getAllPostsData = (): BlogPost[] => {
	return getBlogFiles()
		.reduce(
			(accumulator, filename) => [...accumulator, getPostData(filename)],
			[] as BlogPost[],
		)
		.sort((a, b) => {
			const dateA = new Date(a.frontMatter.publishedAt)
			const dateB = new Date(b.frontMatter.publishedAt)
			return dateB.getTime() - dateA.getTime()
		})
}

export interface BlogPostWithMDX extends BlogPost {
	mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

export const getPostBySlug = async (slug: string) => {
	const fileName = `${slug}.mdx`
	const blogPost = getPostData(fileName)

	const mdxSource = await serialize(blogPost.content, {
		mdxOptions: { rehypePlugins: [rehypePrismPlus] },
	})

	return {
		mdxSource,
		...blogPost,
	} as BlogPostWithMDX
}

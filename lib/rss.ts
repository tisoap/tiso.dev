import fs from 'fs'
import path from 'path'
import { Feed } from 'feed'
import { marked } from 'marked'
import { data } from 'data'
import type { BlogPost } from './mdx'

export const generateRSSFeed = (posts: BlogPost[]) => {
	const domain = data.website.domain
	const year = new Date().getFullYear()

	const feed = new Feed({
		title: `${data.website.name} Feed`,
		description: `${data.owner.firstName}'s Blog Feed`,
		id: `${domain}`,
		link: `${domain}`,
		favicon: `${domain}/favicon.ico`,
		copyright: `All rights reserved ${year}, ${data.owner.fullName}`,
		author: {
			name: data.owner.fullName,
			link: domain,
		},
	})

	posts.forEach((post) => {
		const firstParagraph = post.content.split('\n')[1]
		const content = marked.parse(firstParagraph)

		feed.addItem({
			title: post.frontMatter.title,
			id: post.metadata.slug,
			link: `${domain}/blog/${post.metadata.slug}`,
			content,
			author: [
				{
					name: data.owner.fullName,
					link: domain,
				},
			],
			date: new Date(post.frontMatter.publishedAt),
		})
	})

	const publicFolder = path.join(process.cwd(), 'public')

	fs.writeFileSync(`${publicFolder}/rss.xml`, feed.rss2())
}

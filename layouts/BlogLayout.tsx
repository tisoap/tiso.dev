import { Card } from 'components/Card'
import { FrontMatter } from 'components/FrontMatter'
import { InternalLink } from 'components/InternalLink'
import { useBodyTextColor, useInlineCodeBgColor } from 'hooks/colorMode'
import { MainLayout } from './MainLayout'
import type { PostFrontMatter, PostMetadata } from 'lib/mdx'
import type { ReactNode } from 'react'

export interface BlogLayoutProps {
	children: ReactNode
	frontMatter: PostFrontMatter
	metadata: PostMetadata
}

export const BlogLayout = ({
	children,
	frontMatter,
	metadata,
}: BlogLayoutProps) => {
	return (
		<MainLayout title={`tiso.dev - ${frontMatter.title}`}>
			<Card
				as="article"
				/*
					For some reason, I can't use custom "code" and "pre" components in the
					MarkdownProvider while using the rehype-prism-plus plugin. So I've
					resorted to style styling them here.
				*/
				sx={{
					'& code, & pre': {
						fontFamily: 'mono',
						fontSize: 'inherit',
					},
					'& code[class*="language-"], & pre[class*="language-"]': {
						fontSize: 'sm',
					},
					'& pre[class*="language-"]': {
						borderRadius: 'md',
					},
					'& p code': {
						color: useBodyTextColor(),
						backgroundColor: useInlineCodeBgColor(),
						padding: '.1em .3em',
						borderRadius: 'md',
					},
				}}
			>
				<FrontMatter matter={frontMatter} metadata={metadata} mb={8} />
				{children}
				<InternalLink mt={4} href="/">
					Back to home page
				</InternalLink>
			</Card>
		</MainLayout>
	)
}

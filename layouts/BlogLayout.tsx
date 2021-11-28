import { Card } from 'components/Card'
import { FrontMatter } from 'components/FrontMatter'
import { InternalLink } from 'components/InternalLink'
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
			<Card as="article">
				<FrontMatter matter={frontMatter} metadata={metadata} mb={8} />
				{children}
				<InternalLink mt={4} href="/">
					Back to home page
				</InternalLink>
			</Card>
		</MainLayout>
	)
}

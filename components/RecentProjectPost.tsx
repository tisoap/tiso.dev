import { Box, Heading, VStack } from '@chakra-ui/react'
import { projects } from 'data/projects'
import { InternalLink } from './InternalLink'
import { PostCard } from './PostCard'
import { ProjectCard } from './ProjectCard'
import type { BlogPost } from 'lib/mdx'

export type RecentProjectPostProps = {
	posts: BlogPost[]
}

export const RecentProjectPost = ({ posts }: RecentProjectPostProps) => {
	const [latestProject] = projects
	const [latestPost] = posts

	return (
		<VStack spacing={10}>
			<Box as="section" width="100%">
				<Heading as="h2" size="lg" mb={3}>
					Latest Post
				</Heading>
				<VStack spacing={4}>
					<PostCard key={latestPost.frontMatter.title} post={latestPost} />
				</VStack>
				<Box textAlign="center" fontWeight="bold" mt={4}>
					<InternalLink href="/blog">See more posts</InternalLink>
				</Box>
			</Box>
			<Box as="section" width="100%">
				<Heading as="h2" size="lg" mb={3}>
					Latest Project
				</Heading>
				<VStack spacing={4}>
					<ProjectCard key={latestProject.name} project={latestProject} />
				</VStack>
				<Box textAlign="center" fontWeight="bold" mt={4}>
					<InternalLink href="/projects">See other projects</InternalLink>
				</Box>
			</Box>
		</VStack>
	)
}

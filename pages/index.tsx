import { Box, Heading, Text } from '@chakra-ui/react'
import { AnimatedTag } from 'components/AnimatedTag'
import { RecentProjectPost } from 'components/RecentProjectPost'
import { SocialIcons } from 'components/SocialIcons'
import { data } from 'data'
import { MainLayout } from 'layouts'
import { getTimeWorking } from 'lib/date'
import { getAllPostsData } from 'lib/mdx'
import { generateRSSFeed } from 'lib/rss'
import type { BlogPost } from 'lib/mdx'

export type HomeProps = {
	posts: BlogPost[]
}

const HomePage = ({ posts }: HomeProps) => {
	return (
		<MainLayout title={`${data.website.name} | Home`}>
			<Box as="header" mb={14}>
				<Heading
					as="h1"
					fontSize={['3xl', '4xl', '5xl']}
					textAlign="center"
					mb={4}
				>
					Hi, I&apos;m&nbsp;
					<Box as="span" color="brand">
						{data.owner.firstName}
					</Box>
					&nbsp;
					<AnimatedTag />
				</Heading>
				<Text textAlign="left" fontSize={['md', '2xl']} mb={4}>
					I&apos;m a Front-end developer graduated in Computer Science, with
					over {getTimeWorking()} of professional web development experience.
				</Text>
				<SocialIcons justifyContent="center" />
			</Box>
			<RecentProjectPost posts={posts} />
		</MainLayout>
	)
}

export function getStaticProps() {
	const posts = getAllPostsData()
	generateRSSFeed(posts)
	return { props: { posts } }
}

export default HomePage

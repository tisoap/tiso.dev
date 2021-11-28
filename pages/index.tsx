import { Box, Heading, Text } from '@chakra-ui/react'
import { AnimatedTag } from 'components/AnimatedTag'
import { RecentProjectPost } from 'components/RecentProjectPost'
import { SocialIcons } from 'components/SocialIcons'
import { useBrandColor } from 'hooks/colorMode'
import { MainLayout } from 'layouts'
import { getTimeWorking } from 'lib/date'
import { getAllPostsData } from 'lib/mdx'
import type { BlogPost } from 'lib/mdx'

export const meta = {
	type: 'website',
	title: "Tiso's portfolio",
	summary: 'Learning and projects',
}

export type HomeProps = {
	posts: BlogPost[]
}

const HomePage = ({ posts }: HomeProps) => {
	return (
		<MainLayout title="tiso.dev | Home">
			<Box as="header" mb={14}>
				<Heading
					as="h1"
					fontSize={['3xl', '4xl', '5xl']}
					textAlign="center"
					mb={4}
				>
					Hi, I&apos;m&nbsp;
					<Box as="span" color={useBrandColor()}>
						Tiso
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
	return { props: { posts } }
}

export default HomePage

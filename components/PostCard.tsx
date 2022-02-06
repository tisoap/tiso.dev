import { Heading, VStack, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { formatStringDate } from 'lib/date'
import { Card } from './Card'
import type { BoxProps } from '@chakra-ui/react'
import type { BlogPost } from 'lib/mdx'

export interface PostCardProps extends BoxProps {
	post: BlogPost
}

export const PostCard = ({ post, ...rest }: PostCardProps) => {
	const dateString = formatStringDate(post.frontMatter.publishedAt)
	const readingTime = post.metadata.readingTime.text

	return (
		<NextLink href={`/blog/${post.metadata.slug}`} passHref>
			<Link display="block" width="100%" _hover={{ textDecoration: 'none' }}>
				<Card
					width="100%"
					userSelect="none"
					textAlign="left"
					_hover={{ backgroundColor: 'cardHover' }}
					{...rest}
				>
					<VStack as="header" spacing={2} alignItems="start">
						<Text
							as="span"
							color="brand"
							textTransform="uppercase"
							fontWeight="bold"
							fontSize={['xs', 'xs', 'sm']}
							letterSpacing={1.1}
						>
							Post
						</Text>
						<Heading as="h3" fontSize={['md', 'xl', '2xl']} fontFamily="body">
							{post.frontMatter.title}
						</Heading>
						<Text color="mutedText" textDecoration="underline">
							{dateString} · {readingTime}
						</Text>
					</VStack>
				</Card>
			</Link>
		</NextLink>
	)
}

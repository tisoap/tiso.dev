import { Box, Heading, Flex, Text } from '@chakra-ui/react'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { data } from 'data'
import { formatStringDate } from 'lib/date'
import type { BoxProps } from '@chakra-ui/react'
import type { PostFrontMatter, PostMetadata } from 'lib/mdx'

export interface PostFrontMatterProps extends BoxProps {
	matter: PostFrontMatter
	metadata: PostMetadata
}

export const FrontMatter = ({
	matter,
	metadata,
	...rest
}: PostFrontMatterProps) => {
	const dateString = formatStringDate(matter.publishedAt)

	return (
		<Box as="header" {...rest}>
			<Heading as="h1" size="xl">
				{matter.title}
			</Heading>
			<Flex justifyContent="space-between" mt={4} flexWrap="wrap">
				<Text as="span" fontSize="sm">
					<Box as="address" display="inline">
						{data.owner.fullName}
					</Box>
					&nbsp;/&nbsp;
					<Box as="time" dateTime={matter.publishedAt}>
						{dateString}
					</Box>
				</Text>
				<Box as="span" fontSize="sm" display="flex" alignItems="center">
					<AiOutlineFieldTime /> &nbsp;
					{metadata.readingTime.text}
				</Box>
			</Flex>
		</Box>
	)
}

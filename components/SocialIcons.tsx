import { HStack } from '@chakra-ui/react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaRssSquare } from 'react-icons/fa'
import { data } from 'data'
import { IconLink } from './IconLink'
import type { StackProps } from '@chakra-ui/react'

export const SocialIcons = (props: StackProps) => {
	return (
		<HStack spacing={4} {...props}>
			<IconLink href={data.owner.linkedIn} title="LinkedIn">
				<AiFillLinkedin />
			</IconLink>
			<IconLink href={data.owner.gitHub} title="GitHub">
				<AiOutlineGithub />
			</IconLink>
			<IconLink href="/rss.xml" title="RSS Feed" isExternal={false}>
				<FaRssSquare />
			</IconLink>
		</HStack>
	)
}

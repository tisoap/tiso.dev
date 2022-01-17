import { HStack } from '@chakra-ui/react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaStackOverflow } from 'react-icons/fa'
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
			<IconLink href={data.owner.stackOverflow} title="Stack Overflow">
				<FaStackOverflow />
			</IconLink>
		</HStack>
	)
}

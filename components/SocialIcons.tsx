import { HStack } from '@chakra-ui/react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaStackOverflow } from 'react-icons/fa'
import { IconLink } from './IconLink'
import type { StackProps } from '@chakra-ui/react'

export const SocialIcons = (props: StackProps) => {
	return (
		<HStack spacing={4} {...props}>
			<IconLink
				href="https://www.linkedin.com/in/tiso-alvarez-puccinelli"
				title="LinkedIn"
			>
				<AiFillLinkedin />
			</IconLink>
			<IconLink href="https://github.com/tisoap" title="GitHub">
				<AiOutlineGithub />
			</IconLink>
			<IconLink
				href="https://stackoverflow.com/users/story/8078275"
				title="Stack Overflow"
			>
				<FaStackOverflow />
			</IconLink>
		</HStack>
	)
}

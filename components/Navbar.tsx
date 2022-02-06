import { Flex } from '@chakra-ui/react'
import { Menu } from './Menu'
import { MobileMenu } from './MobileMenu'
import { ToggleLightDarkButton } from './ToggleLightDarkButton'
import type { FlexProps } from '@chakra-ui/react'

export const Navbar = (props: FlexProps) => {
	return (
		<Flex
			as="nav"
			justifyContent="space-between"
			p={4}
			borderTop="4px solid"
			backgroundColor="foreground"
			borderTopColor="brand"
			boxShadow="base"
			{...props}
		>
			<ToggleLightDarkButton />
			<Menu display={['none', 'none', 'flex']} mr={6} />
			<MobileMenu display={['flex', 'flex', 'none']} mr={6} />
		</Flex>
	)
}

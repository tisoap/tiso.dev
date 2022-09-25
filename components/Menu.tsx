import { HStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { menus } from 'data/menus'
import { InternalLink } from './InternalLink'
import type { StackProps } from '@chakra-ui/react'

export const Menu = (props: StackProps) => {
	const router = useRouter()

	return (
		<HStack spacing={4} fontSize="lg" userSelect="none" {...props}>
			{menus.map((menu) => {
				const isPath = router.asPath === menu.link
				const color = isPath ? 'brand' : undefined

				return (
					<InternalLink
						key={menu.name}
						href={menu.link}
						fontWeight="bold"
						color={color}
					>
						{menu.name}
					</InternalLink>
				)
			})}
		</HStack>
	)
}

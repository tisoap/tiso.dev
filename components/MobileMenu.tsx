import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Link,
	Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BiMenu } from 'react-icons/bi'
import { menus } from 'data/menus'
import { NextLink } from './NextLink'
import type { MenuButtonProps } from '@chakra-ui/react'

export const MobileMenu = (props: MenuButtonProps) => {
	const router = useRouter()

	return (
		<Menu placement="bottom-start">
			<MenuButton as={Button} rightIcon={<BiMenu />} {...props}>
				Navigation Menu
			</MenuButton>
			<MenuList backgroundColor="foreground">
				{menus.map((menu) => {
					const isPath = router.asPath === menu.link
					const color = isPath ? 'brand' : undefined

					return (
						<NextLink key={menu.name} href={menu.link} passHref>
							<MenuItem
								as={Link}
								fontSize="lg"
								fontWeight="bold"
								color={color}
								_hover={{ textDecoration: 'none' }}
							>
								{menu.name}
							</MenuItem>
						</NextLink>
					)
				})}
			</MenuList>
		</Menu>
	)
}

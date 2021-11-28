import { Box, usePrefersReducedMotion } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from 'components/Footer'
import { MotionBox } from 'components/MotionBox'
import { Navbar } from 'components/Navbar'
import { useBodyTextColor, useBackgroundColor } from 'hooks/colorMode'
import type { ReactNode } from 'react'

export type MainLayoutProps = {
	title?: string
	children: ReactNode
}

const animationProps = {
	initial: { opacity: 0, x: -200, y: 0 },
	animate: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -200, y: 0 },
	transition: { type: 'linear' },
}

export const MainLayout = ({
	children,
	title = 'tiso.dev',
}: MainLayoutProps) => {
	const router = useRouter()
	const prefersReducedMotion = usePrefersReducedMotion()
	const motionProps = prefersReducedMotion ? {} : animationProps

	return (
		<Box
			minHeight="100%"
			display="flex"
			flexDirection="column"
			color={useBodyTextColor()}
			backgroundColor={useBackgroundColor()}
		>
			<Head>
				<title>{title}</title>
				<link rel="canonical" href={`https://tiso.dev${router.asPath}`} />
				<meta name="robots" content="follow, index" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={`https://tiso.dev${router.asPath}`} />
				<meta property="og:site_name" content="tiso.dev" />
				<meta property="og:title" content={title} />
			</Head>
			<Navbar mb={8} flex={0} />
			<MotionBox
				as="main"
				px={6}
				width="100%"
				maxWidth="3xl"
				height="100%"
				margin="auto"
				flex={1}
				display="flex"
				flexDirection="column"
				{...motionProps}
			>
				{children}
			</MotionBox>
			<Footer flex={0} />
		</Box>
	)
}

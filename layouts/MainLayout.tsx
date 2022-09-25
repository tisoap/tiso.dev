import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { data } from 'data'
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
	title = data.website.name,
}: MainLayoutProps) => {
	const router = useRouter()
	let isLocal = false

	if (typeof window !== 'undefined') {
		isLocal = window.location.hostname === 'localhost'
	}

	const canonical = isLocal
		? `http://localhost:3000${router.asPath}`
		: `${data.website.domain}${router.asPath}`

	return (
		<Box
			minHeight="100%"
			display="flex"
			flexDirection="column"
			color="bodyText"
			backgroundColor="background"
			id="layout"
		>
			<Head>
				<title>{title}</title>
				<link rel="canonical" href={canonical} />
				<meta
					name="description"
					content={`${data.owner.firstName}'s personal website with their projects and blog posts.`}
				/>
				<meta name="robots" content="follow, index" />
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content={`${data.website.domain}${router.asPath}`}
				/>
				<meta property="og:site_name" content={data.website.name} />
				<meta property="og:title" content={title} />
			</Head>
			<Navbar mb={8} flex={0} />
			<Box
				as="main"
				px={6}
				width="100%"
				maxWidth="3xl"
				height="100%"
				margin="auto"
				flex={1}
				display="flex"
				flexDirection="column"
				{...animationProps}
			>
				{children}
			</Box>
			<Footer flex={0} />
		</Box>
	)
}

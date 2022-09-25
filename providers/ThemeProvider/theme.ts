import { extendTheme } from '@chakra-ui/react'
import type { ThemeConfig } from '@chakra-ui/react'

const fonts = {
	body: "'Fira Sans', sans-serif",
	heading: "'Fira Sans', sans-serif",
	mono: "'Fira Code', monospace",
}

const styles = {
	global: {
		'html, body, #__next': {
			fontFamily: 'body',
			fontSize: 'md',
			minWidth: '320px',
			height: '100%',
		},
	},
}

const semanticTokens = {
	colors: {
		brand: {
			default: 'purple.600',
			_dark: 'purple.400',
		},
		background: {
			default: 'gray.50',
			_dark: 'gray.800',
		},
		foreground: {
			default: 'white',
			_dark: 'gray.900',
		},
		cardHover: {
			default: 'purple.100',
			_dark: 'purple.900',
		},
		link: {
			default: 'blue.600',
			_dark: 'blue.300',
		},
		bodyText: {
			default: 'gray.800',
			_dark: 'gray.100',
		},
		mutedText: {
			default: 'gray.600',
			_dark: 'gray.300',
		},
		brandText: {
			default: 'purple.800',
			_dark: 'purple.200',
		},
		inlineCodeBg: {
			default: 'gray.100',
			_dark: 'gray.700',
		},
	},
}

export const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

export const theme = extendTheme({
	fonts,
	styles,
	semanticTokens,
	config,
})

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { ThemeConfig } from '@chakra-ui/react'
import type { Dict } from '@chakra-ui/utils'
import type { ReactNode } from 'react'

export const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

export const theme = extendTheme({
	fonts: {
		body: "'Fira Sans', sans-serif",
		heading: "'Fira Sans', sans-serif",
		mono: "'Fira Code', monospace",
	},
	styles: {
		global: (props: Dict<any>) => ({
			'html, body, #__next': {
				fontFamily: 'body',
				fontSize: 'md',
				minWidth: '320px',
				height: '100%',
			},
			'code, pre, code[class*="language-"], pre[class*="language-"]': {
				fontFamily: "'Fira Code', monospace !important",
				fontSize: '1em !important',
			},
			'pre[class*="language-"]': {
				borderRadius: 'md',
			},
			'p code': {
				color: mode('gray.800', 'gray.100')(props),
				backgroundColor: mode('gray.100', 'gray.700')(props),
				padding: '.2em .4em',
				borderRadius: 'md',
			},
		}),
	},
	config,
})

type ThemeProviderProps = {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
	<ChakraProvider resetCSS theme={theme}>
		{children}
	</ChakraProvider>
)

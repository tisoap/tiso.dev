import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { ThemeConfig } from '@chakra-ui/react'
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
		global: {
			'html, body, #__next': {
				fontFamily: 'body',
				fontSize: 'md',
				minWidth: '320px',
				height: '100%',
			},
			'code, pre, code[class*="language-"], pre[class*="language-"]': {
				fontFamily: 'mono',
				fontSize: 'md',
				borderRadius: 'md',
			},
		},
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

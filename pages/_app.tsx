import { AnimatePresence } from 'framer-motion'
import { ThemeProvider, MarkdownProvider } from 'providers'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
	<ThemeProvider>
		<MarkdownProvider>
			<AnimatePresence initial exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</MarkdownProvider>
	</ThemeProvider>
)

export default MyApp

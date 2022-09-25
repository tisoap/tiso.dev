import { ThemeProvider, MarkdownProvider } from 'providers'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps, router }: AppProps) => (
	<ThemeProvider>
		<MarkdownProvider>
			<Component {...pageProps} key={router.route} />
		</MarkdownProvider>
	</ThemeProvider>
)

export default MyApp

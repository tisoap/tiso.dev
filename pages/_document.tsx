import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { config } from 'providers/theme'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="prefetch" href="/images/loading-buffering.gif" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;1,400&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

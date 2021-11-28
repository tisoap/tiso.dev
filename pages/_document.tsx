import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { config } from 'providers/ThemeProvider'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.5.0/prism-vsc-dark-plus.min.css"
						integrity="sha512-GU4Q2LAEtdpc8WmjcbSJGxM6c8D69ggI3mc5SRnfnxpg5AkYYA0BEVve0W9Oj2wZR0UItklQK2RBKLtDsQHNzg=="
						crossOrigin="anonymous"
						referrerPolicy="no-referrer"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;1,400&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Fira+Sans:ital,wght@0,400;0,600;1,400&display=swap"
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

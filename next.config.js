const withMDX = require('@next/mdx')({
	extension: /\.mdx$/,
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
	withMDX({
		pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
		swcMinify: true,
		images: {
			formats: ['image/avif', 'image/webp'],
		},
	}),
)

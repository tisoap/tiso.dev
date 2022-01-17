# tiso.dev

This is the source code of my personal website, [tiso.dev](https://tiso.dev/).

## Requirements

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Chrome](https://www.google.com/intl/en-US/chrome/)

## Running

Clone this project using Git. In a terminal, navigate to the cloned project's root folder, and run the following command:

```bash
yarn && yarn dev
```

Once ready, open [localhost:3000](http://localhost:3000) in you browser.

## Scaffolding your own blog

To use this repository as basis to your own personal blog, you need to do the following:

1. Fork this repository and `git clone` your fork
2. Update the `LICENSE` file to include your own name, without altering the rest of the license ([instructions](https://gist.github.com/tisoap/1938209165b4752ae0100afc472bdc23))
3. Update the following fields on `package.json` with your information: `name`, `description` and `author`
4. Update all fields on `data/index.ts` with your own info
5. Update the list of projects on `data/projects.ts` with your own projects
6. Update the introductory text in the `pages/index.tsx` page
7. Delete all files inside `data/blog` folder, and start writing your own posts!
8. (Optional) Update the overall styling/components of the blog so yours isn't an exact copy
9. (Optional) Deploy it using [Vercel and a custom domain name](https://vercel.com/docs/get-started)

## Technologies

- [Chakra UI](https://chakra-ui.com/)
- [Emotion](https://emotion.sh/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)

## License

This project is licensed under the MIT License.

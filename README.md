![Next.JS](https://img.shields.io/badge/next.js-TypeScript-007ACC?logo=nextdotjs&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-29B9AD?logo=chakraui&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white)

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

## Commands

- `yarn build`: Creates a production build from this project
- `yarn check-repo`: Runs type, spell, format and linter checking
- `yarn dev`: Starts the project with hot reload at `http://localhost:3000`
- `yarn eslint`: Runs the code linter
- `yarn generate-theme-typings`: Generates TypeScript typings for the project's Chakra theme
- `yarn prettier`: Runs the code formatter
- `yarn spellcheck`: Checks for spelling typos in code
- `yarn typecheck`: Check validity of all types in the project

## Scaffolding your own blog

To use this repository as basis to your own personal blog, you need to do the following:

1. Fork this repository and `git clone` your fork
2. Update the `LICENSE` file to include your own name, without altering the rest of the license ([instructions](https://gist.github.com/tisoap/1938209165b4752ae0100afc472bdc23))
3. Update the following fields on `package.json` with your information: `name`, `description` and `author`
4. Update all fields on `data/index.ts` with your own info
5. Update the list of projects on `data/projects.ts` with your own projects
6. Update the introductory text in the `pages/index.tsx` page
7. Remove/replace this README.md file
8. Delete all files inside `data/blog` folder, and start writing your own posts!
9. (Optional) Update the overall styling/components of the blog so yours isn't an exact copy
10. (Optional) Deploy it using [Vercel and a custom domain name](https://vercel.com/docs/get-started)

## Writing posts

All posts in this blog are written as [MDX files](https://mdxjs.com/) inside the `data/blog` folder. They all follow this format:

```
---
title: 'The post title'
publishedAt: 'YYYY-MM-DD'
---

Article content starts here.
```

The file name is important because it's used to create the post's unique URL. So a file `data/blog/my-post.mdx` will be available at `http://localhost:3000/blog/my-post`

### Customizing post styling

You can pass down custom React components to render for each type of markdown element, by specifying them on `providers/MarkdownProvider.tsx`. More info at [`@mdx-js/react` docs](https://mdxjs.com/packages/react/).

This project uses [`rehype-prism-plus`](https://github.com/timlrx/rehype-prism-plus#rehype-prism-plus) to add syntax highlight to `<code>` blocks inside posts. You can change the highlight styling by replacing the prism theme CSS Stylesheet imported in `pages/_document.tsx`, adding more global CSS imports or updating the blog layout styling at `layouts/BlogLayout.tsx`.

## Technologies

- [Chakra UI](https://chakra-ui.com/)
- [Emotion](https://emotion.sh/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)

## License

This project is licensed under the MIT License.

### Support

Liked this project and want to show your support? Buy me a coffee:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J472RAJ)

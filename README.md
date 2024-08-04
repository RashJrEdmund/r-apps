# r-apps

![r-apps-logo](./public/favicon.png)

## Welcome to R - Apps. A collections of r -applications

Built with [vite](https://v3.vitejs.dev/guide/) & React. Visit r-apps [here](https://r-apps.vercel.app)

### A list of r - apps include

- [r-cloud](https://r-cloud.vercel.app)

  <img src="https://r-cloud.vercel.app/icon.png" height="50" width="50" />

  - A cloud storage application for storing and managing files online

- [r-chat](#a-list-of-r---apps-include)

  - A chat application

- [r-tm](#a-list-of-r---apps-include)
  - A task manager application

and many more to come.

as of now, only [r-cloud](https://r-apps.vercel.app) is live

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Format with [Prettier](https://prettier.io/docs/en/configuration)

```sh
pnpm format
```

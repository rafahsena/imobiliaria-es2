# ES2 Project with Next JS 12+, Chakra UI and TypeScript
Boilerplate used - [Github](https://github.com/ixartz/Next-js-Boilerplate)

### Features

Developer experience first:

- โก [Next.js](https://nextjs.org) for Static Site Generator
- ๐ฅ Type checking [TypeScript](https://www.typescriptlang.org)
- โ Strict Mode for TypeScript and React 18
- ๐ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- ๐ Code Formatter with [Prettier](https://prettier.io)
- ๐ฆ Husky for Git Hooks
- ๐ซ Lint-staged for running linters on Git staged files
- ๐ Lint git commit with Commitlint
- ๐ฆบ Unit Testing with Jest and React Testing Library
- ๐งช E2E Testing with Cypress
- ๐ก Absolute Imports using `@` prefix
- ๐ VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- ๐ค SEO metadata, JSON-LD and Open Graph tags with Next SEO
- โ๏ธ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- ๐ฑ๏ธ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- ๐ Include a FREE minimalist theme
- ๐ฏ Maximize lighthouse score

Built-in feature from Next.js:

- โ Minify HTML & CSS
- ๐จ Live reload
- โ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- ๐ Production-ready
### Requirements

- Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
yarn
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Setting the database

First things first, create your .env file by running the following command:

```shell
$ cp .env.example .env
```

Then you need to copy the environment values from the _docker-compose.yml_ file to fill in the default values of the DATABASE_URL variable on .env file:

```DATABASE_URL="postgresql://user:pass@host:5432/dbname"```

To get your host ip, simply inspect all your docker containers and copy the one corresponding to your db

```shell
$ docker inspect --format='{{.Name}} {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $(docker ps -q)
```

By completing the filling process on the .env file, run the following command to run the migrations over your database:

```shell
$ npx prisma migrate dev
```

(Optional) To populate the database run this:

```shell
$ npm run seed
```

To visualize the database using prisma studio:
```shell 
$ npx prisma studio 
```

### Project Structure

```shell
.
โโโ README.md                       # README file
โโโ __mocks__                       # Mocks for testing
โโโ .github                         # GitHub folder
โโโ .husky                          # Husky configuration
โโโ .vscode                         # VSCode configuration
โโโ prisma                          # Database migration folder
โ   โโโ migrations                  # migrations and respective sql files
โโโ public                          # Public assets folder
โโโ src
โ   โโโ layouts                     # Layouts components
โ   โโโ pages                       # Next JS Pages
โ   โโโ pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
โ   โโโ styles                      # Styles folder
โ   โโโ templates                   # Default template
โ   โโโ utils                       # Utility functions
โโโ tailwind.config.js              # Tailwind CSS configuration
โโโ tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme

### Deploy to production

You can see the results locally in production mode with:

```shell
$ yarn build
$ yarn start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
yarn build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.
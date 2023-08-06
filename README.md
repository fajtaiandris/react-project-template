# ⚛️ React Project Template

This is a frontend project template containing my preferred packages.

## ⚙️ Installation

- `npm install`: Install dependencies.

## 🚀 Usage

- `npm run dev`: Start a development server using Vite.
- `npm run build`: Build the project using TypeScript and Vite.
- `npm run preview`: Serve the production build locally for previewing before deployment.
- `npm run lint`: Run ESLint on all applicable files with the TypeScript and TypeScript React extensions.
- `npm run lint:prettier`: Check if all files are formatted according to the Prettier configuration.
- `npm run lint:prettier:fix`: Automatically fix any Prettier formatting issues in the codebase.
- `npm run prepare`: Install Husky, a tool for creating Git hooks, in the local repository.
- `npm run commit`: Open a prompt for writing a commit message according to the Conventional Commits specification.
- `npm run storybook`: Start Storybook, an interactive development environment for testing and documenting UI components.
- `npm run build-storybook`: Build Storybook into a static web application for deployment.
- `npm run test`: Run tests using Vitest.

## 🧳 Features

- ⚛️ Rendering and state management with [React](https://react.dev/)
- 🔥 Type checking with [TypeScript](https://www.typescriptlang.org)
- ⚡ Fast build tooling with [Vite](https://vitejs.dev/)
- 📏 Linting with [ESLint](https://eslint.org) (plugins for TailwindCSS)
- 💖 Code formatting with [Prettier](https://prettier.io)
- 🦊 Git Hooks with [Husky](https://typicode.github.io/husky/#/)
- 🚫 Linting just the staged files with [Lint-staged](https://github.com/okonet/lint-staged#readme)
- 🚓 Commit linting with [Commitlint](https://commitlint.js.org/#/)
- 📓 Help for writing commit messages from [Commitizen](https://commitizen-tools.github.io/commitizen/)
- 🎁 Automatic changelog generation with [Standard Version](https://github.com/conventional-changelog/standard-version)
- 🦺 Unit Testing with [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/)
- 🎉 Isolated UI development with [Storybook](https://storybook.js.org/)
- 🤖 Automation in [Gitlab CI/CD](https://docs.gitlab.com/ee/ci/) (linting, building, testing)
- 💎 Styling in the markup with [Tailwind CSS](https://tailwindcss.com)
- 💅 Fast conditional styling with [Classix](https://github.com/alexnault/classix#readme)
- ☎️ Fetching and managing fetched data with [Tanstack Query](https://tanstack.com/query/latest)
- 👷 Mocking API responses with [Mock Service Worker](https://mswjs.io/)
- 🚏 Handling routes with [React Router](https://reactrouter.com/en/main)
- 📋 Forms with [React Hook Form](https://react-hook-form.com/)
- 👩‍🏫 Form validation with [Zod](https://zod.dev/)
- 🌐 Internationalization with [FormatJS](https://formatjs.io/)
- 💡 Absolute Imports using the `@` prefix
- 🗂 VSCode configuration: settings and extensions

## 🚀 Cleaning up the example code

- Remove the contents of the `src/components/` folder
- Remove each subfolder in the `src/pages/Root/` folder
- Clean the `src/pages/Root/Root.tsx` component
- Remove any interfaces from the `src/interfaces` folder
- Remove any hookes from the `src/queries` folder
- Remove the handler in `src/mocks/handlers.ts`
- Revise the routes in the `src/main.tsx` file
- Revise the auth logic in the `src/pages/PrivateOutlet.tsx` file
- Maybe revise the `src/pages/Error/ErrorPage.tsx` file
- Maybe revise the remaining mr templates in the `.gitlab/merge_request_templates/` folder
- Revise the languages in the `src/i18n/useLocaleContext.ts` file
- Revise the messages in the `public/i18n` folder
- Revise the metadata in `package.json`
- Revise the `README.md`
- Consider adding labels on GitLab to organize MRs (Project information -> Labels)
- Delete section of the README.

## 🏗️ Additional packages

Here's a short list of recommended additional packages. Add them when you need them.

### Zustand

> Add this library when the built-in React hooks and React Query can't handle your global state.

- Run `npm install zustand`
- Create a store in `src/stores/bearStore.ts`:

  ```typescript
  import { create } from 'zustand';
  import { devtools } from 'zustand/middleware';

  interface BearState {
    bears: number;
    increase: (by: number) => void;
  }

  export const useBearStore = create<BearState>()(
    devtools((set) => ({
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
    })),
  );
  ```

- Bind it in the `src/pages/Root/ZustandExample/ZustandExample.tsx`:

  ```typescript
  import React from 'react';

  import { useBearStore } from '../../../stores/bearStore';

  export function ZustandExample() {
    const bears = useBearStore((state) => state.bears);
    const increasePopulation = useBearStore((state) => state.increase);

    return (
      <>
        <h1 className="text-xl font-semibold">🐻 Zustand</h1>
        <div className="mt-6 text-base leading-7 text-gray-600">
          <p>
            <span className="text-lg font-semibold">#1</span>
            {' When built in React hooks are just not enough, you can manage global state with Zustand.'}
          </p>
          <p className="mt-4">
            <span className="text-lg font-semibold">#2</span> Try it out:{' '}
          </p>
          <div>
            <div className="w-fit rounded bg-purple-100 px-2 text-purple-700">{bears} bears in the store</div>
            <button className="mt-2 rounded bg-purple-500 px-2 text-white shadow" onClick={() => increasePopulation(1)}>
              bear me
            </button>
          </div>
          <p className="mt-4">
            <span className="text-lg font-semibold">#3</span>
            {" Notice that even though it's not Redux, the Redux DevTools still works with your global state."}
          </p>
        </div>
      </>
    );
  }
  ```

This is an article reader in **React/Typescript** like Medium created for practice purposes.

To focus on learning React, the following choices were made:
- `Auth0` for user/session management;
- `localStorage` for articles storage using a stringified collection;
- `React Context` for state management related to user (including bookmarks);
- `Tailwind CSS` for CSS Reset and direct styling of some components (for some cases, plain CSS is used).

To create the project with Typescript and Tailwind CSS setup, [this Create React App template](https://github.com/ericgibby/cra-template-craco-tailwindcss-typescript) was used.

## Features

- `Home page` lists all published articles (to access it from anywhere click on the "GX" logo);
- In `Home page`, users can filter by the categories `Engineering`, `Marketing` and `Design`;
- In the the upper right corner, the user can login (through `Auth0`);
- **Logged users** are able to create **New Articles** that can be a draft or published one;
- **Drafted articles** will be only available to their authors;
- **Logged users** can bookmark articles to read later.


## Auth0 Setup

Since the project is using `Auth0`, it's necessary to have an Auth0 application and its settings must be placed in the file `src/auth0.settings.ts`.

A model for the settings file can be found [here](/auth0-sample.settings.ts), contact me for help.

## How to Run

In the project directory, you can run:

### `yarn install`

To install de dependencies using **yarn**.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Future Features

- Load images for articles;
- Support to Administrator Users;
- Articles pages;

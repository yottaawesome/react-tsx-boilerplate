# React TSX Boilerplate

## Introduction

This repository is similar to my [latest-inferno-boilerplate](https://github.com/yottaawesome/latest-inferno-boilerplate), but for React, WebPack and TypeScript. It comes with `react-router-dom` and modular SCSS support set up, but does not come with Redux, Immutable.js, and the like. You can add support for these if you want, but I chose not to because I think there are [frequently](https://www.npmjs.com/package/brainlet) [better](https://dev.to/jaffparker/you-might-not-need-redux-k4e) [alternatives](https://dev.to/polluterofminds/why-you-probably-don-t-need-redux-399o) to the Redux/React-Redux/Immutable paradigm, [if you even need Redux at all](https://medium.com/@blairanderson/you-probably-dont-need-redux-1b404204a07f).

## Using the code

The `src` folder contains a basic example app to get started.

1. Clone this repo.
2. Run npm install to install dependencies.
3. Run npm run dev to build the `src/index.tsx` file in dev mode, or run npm run prod to build in prod mode. Note that the prod build extracts the transpiled CSS into `dist/main.css` using `mini-css-extract-plugin`, whereas the dev build bundles it into the JS file.
4. Open `helloworld.html` to confirm the file was built successfully. You may consider adding a dev-server to your copy of this project.
5. Make whatever additional changes you need for your project.

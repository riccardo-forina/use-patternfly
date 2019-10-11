<h1 align="center">
  use-patternfly
</h1>

<h3 align="center">
  An opinionated set of hooks and components useful when building a React app with PatternFly
</h3>

[![Build status](https://img.shields.io/circleci/build/github/riccardo-forina/use-patternfly)](https://circleci.com/gh/riccardo-forina/use-patternfly)
[![Coverage Status](https://coveralls.io/repos/github/riccardo-forina/use-patternfly/badge.svg?branch=master)](https://coveralls.io/github/riccardo-forina/use-patternfly?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ea2ae0c7-2abd-400f-b49c-68a8734e1e25/deploy-status)](https://app.netlify.com/sites/use-patternfly/deploys)

**Visit [https://use-patternfly.netlify.com](https://use-patternfly.netlify.com) to get started with use-patternfly.**

# User Guide

The recommended workflow is to run TSDX in one terminal:

```
yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```
cd example
yarn # to install dependencies
yarn start
```

To do a one-off build, use `yarn build`.

To run tests, use `yarn test`.
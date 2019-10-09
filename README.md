<h1 align="center">
  use-patternfly
</h1>

<h3 align="center">
  An opinionated set of hooks and components useful when building a React app with PatternFly
</h3>

[![Build status](https://img.shields.io/circleci/build/github/riccardo-forina/use-patternfly)](https://circleci.com/gh/riccardo-forina/use-patternfly)

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

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, [we use Parcel's aliasing](https://github.com/palmerhq/tsdx/pull/88/files).

To do a one-off build, use `yarn build`.

To run tests, use `yarn test`.
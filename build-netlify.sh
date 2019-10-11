#!/usr/bin/env bash

yarn run build
yarn run yalc publish
cd example
../node_modules/.bin/yalc add use-patternfly
yarn
yarn run build

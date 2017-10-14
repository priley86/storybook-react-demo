# storybook-react-demo
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://travis-ci.org/priley86/storybook-react-demo.svg?branch=master)](https://travis-ci.org/priley86/storybook-react-demo)
[![npm version](https://badge.fury.io/js/storybook-react-demo.svg)](https://badge.fury.io/js/storybook-react-demo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is the resulting project for my All Things Open presentation, ["Secrets to Modular Component Design Systems"](https://allthingsopen.org/talk/secrets-to-modular-component-design-systems/).

Storybook Demo: https://priley86.github.io/storybook-react-demo/

##  Getting Started
```
npm install --save storybook-react-demo
```

Then import UI modules as ES6 modules:
```
import { Button } from 'storybook-react-demo'
```

## Storybook UI Development
This project uses [React Storybook](https://getstorybook.io/) to test and demo new React UI components.

How to use Storybook locally:
```
npm i
npm run storybook
```

How to deploy storybook to github pages in your fork:
```
npm run build-storybook
npm run storybook:deploy
```

To deploy Storybook to a remote other than `origin`, pass a `--remote` flag to `npm run storybook:deploy`.
For example, to deploy to your `upstream` remote:
```
npm run storybook:deploy -- --remote=upstream
```
To deploy Storybook to a target branch and serve with rawgit instead of gh-pages, pass `--branch` flag
to `npm run storybook:deploy`.
For example, to deploy to `feature-branch` target:
```
npm run storybook:deploy -- --branch=feature-branch
```
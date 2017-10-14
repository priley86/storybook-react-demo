import { configure } from '@storybook/react'

/**
 * Storybook's default static compilation uses Uglify which does not yet support ES6
 * in the transpiled source used in the WC polyfills. This impacts static builds
 * of Storybook (i.e. our npm run build-storybook script).
 * 
 * This will be resolved in the future with uglify-es which supports ES6.
 * 
 * For now, we'll load the polyfills in preview-head.html instead.
 */
// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
// import '@webcomponents/webcomponentsjs/webcomponents-sd-ce'

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => {
    req(filename)
  })
}

configure(loadStories, module)

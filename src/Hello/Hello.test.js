/* eslint-env jest */
/* 
  JS Dom Web Component Polyfill Workaround for Jest:
  https://github.com/tmpvar/jsdom/issues/1030
  Will be resolved in: 
  https://github.com/tmpvar/jsdom/pull/1872
*/
import 'document-register-element'

import React from 'react'
import renderer from 'react-test-renderer'
import { default as Hello } from './Hello.js'

test('Hello renders default properly', () => {
  const handleButtonClick = jest.fn()
  const component = renderer.create(
    <Hello buttonClicked={handleButtonClick} className={'btn-primary'} disabled>
      Hello Web Component Snapshot! 📸
    </Hello>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

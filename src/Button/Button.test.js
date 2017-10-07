/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '../index.js'

test('Button renders properly', () => {
  const handleButtonClick = jest.fn()
  const component = renderer.create(
    <Button onClick={handleButtonClick} disabled>
      Hello Jest Snapshot! 📸
    </Button>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

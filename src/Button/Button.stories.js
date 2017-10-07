import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../index.js'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Button', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs)

stories
  .add('with text', () => (
    <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
      {text('Label', 'Hello Button')}
    </Button>
  ))
  .add(
    'with some emoji',
    withInfo('a short description of this button')(() => (
      <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
        😀 😎 👍 💯
      </Button>
    ))
  )

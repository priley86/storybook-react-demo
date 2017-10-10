import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../index.js'
import { withKnobs, text, boolean, object, color } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Button', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
stories.addDecorator(withKnobs)

stories
  .add('with text', () => {
    const backgroundColor = color('Color', '#4caf50')

    const customStyle = object('Style', {
      fontFamily: 'Roboto, Noto, sans-serif',
      padding: 10,
      fontSize: 14,
      borderRadius: 2,
      border: 'none',
      color: 'white',
      boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
      textTransform: 'uppercase',
      cursor: 'auto'
    })

    const bold = boolean('Bold', false)
    const disabled = boolean('Disabled', false)
    const style = {
      ...customStyle,
      fontWeight: bold ? 800 : 400,
      backgroundColor: disabled ? '#eaeaea' : backgroundColor
    }
    return (
      <Button onClick={action('clicked')} disabled={disabled} style={style}>
        {text('Label', 'Hello Button')}
      </Button>
    )
  })
  .add(
    'with some emoji',
    withInfo('a short description of this button')(() => (
      <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
        😀 😎 👍 💯
      </Button>
    ))
  )

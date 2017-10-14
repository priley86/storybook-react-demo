import React from 'react'
import classnames from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Hello } from '../index'
import './Hello.stories.css'

const stories = storiesOf('Hello', module)
stories.addDecorator(withKnobs)

stories.add(
  'with slot styles',
  withInfo('the hello component with slot styles')(() => {
    const slotText = text('Slot', 'Hello Shadow Dom!')
    const disabled = boolean('Disabled', false)
    const buttonClass = select(
      'Button Class',
      ['btn-primary', 'btn-accent', 'btn-warn'],
      'btn-primary'
    )
    const bold = boolean('Bold', false)

    // React 15 requires a ref to set slot attributes, you can use this helper for React 15...
    // https://github.com/skatejs/skatejs/issues/1096
    // const slot = (name = '') => { return {
    //     ref: e => { e.setAttribute('slot', name)}
    //   }
    // }
    return (
      <div>
        <Hello
          buttonClicked={action('button clicked')}
          className={buttonClass}
          disabled={disabled}
        >
          {/** React 16 now natively supports slots and custom attributes so this is not needed **/}
          {/** <span {...slot('content')}>{slotText}</span> **/}
          <span slot="content" className={classnames({ bold: bold })}>
            {slotText}
          </span>
        </Hello>
      </div>
    )
  })
)

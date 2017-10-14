import React from 'react'
import PropTypes from 'prop-types'
import { HelloComponent } from '../index.js'

// globally define the HelloComponent in the custom element registry
window.customElements.define('hello-component', HelloComponent)

/**
 * Hello Component React wrapper
 */
class Hello extends React.Component {
  componentDidMount() {
    const { buttonClicked, disabled } = this.props
    if (this.component) {
      this.setDisabled(disabled)
      this.component.addEventListener('hello-component.onClick', e => {
        if (buttonClicked) {
          buttonClicked(e)
        }
      })
    }
  }

  componentDidUpdate() {
    if (this.component) {
      this.setDisabled(this.props.disabled)
    }
  }

  setDisabled(disabled) {
    disabled
      ? this.component.setAttribute('disabled', '')
      : this.component.removeAttribute('disabled')
  }

  render() {
    const { className, children } = this.props

    // React 16 allows custom attributes (such as class)
    // https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
    // Spread attributes in React 15 no longer needed:
    // let customAttributes = {
    //   'class': className,
    // }
    // return ( <hello-component {...customAttributes}></hello-component>
    return (
      <hello-component
        ref={c => {
          this.component = c
        }}
        class={className}
      >
        {children}
      </hello-component>
    )
  }
}

Hello.propTypes = {
  /** callback when button clicked */
  buttonClicked: PropTypes.func,
  /** className */
  className: PropTypes.string,
  /** button disabled */
  disabled: PropTypes.bool,
  /** children nodes  */
  children: PropTypes.node
}
export default Hello

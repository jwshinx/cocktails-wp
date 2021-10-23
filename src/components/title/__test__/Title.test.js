/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Title from '../Title'

it('renders properly', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Title text="Foobar" />, div)
})

/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Title from '../Title'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Title></Title>, div)
})

it('renders title properly', () => {
  const { getByTestId } = render(<Title text="Foobar"></Title>)
  expect(getByTestId('title')).toHaveTextContent('Foobar')
})

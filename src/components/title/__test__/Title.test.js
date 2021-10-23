/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import Title from '../Title'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Title></Title>, div)
})

it('renders title properly', () => {
  const { getByTestId } = render(<Title text="Foobar"></Title>)
  expect(getByTestId('title')).toHaveTextContent('Foobar')
})

it('renders title properly', () => {
  const { getByTestId } = render(<Title text="Cocktails"></Title>)
  expect(getByTestId('title')).toHaveTextContent('Cocktails')
})

it('should snapshot render Cocktails', () => {
  const tree = renderer.create(<Title text="Cocktails"></Title>).toJSON()
  expect(tree).toMatchSnapshot()
})

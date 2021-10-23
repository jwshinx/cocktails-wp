/**
 * @jest-environment jsdom
 */

import React from 'react'
// import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import SegmentKeySelectorOptions from '../SegmentKeySelectorOptions'

const items = [
  { label: 'First Letter', name: 'firstLetter', value: 'f' },
  { label: 'Cocktail Name', name: 'cocktailName', value: 's' },
]

it('renders a "First Letter" option', () => {
  render(<SegmentKeySelectorOptions items={items} />)
  const elem = screen.getByText(/First Letter/i)
  expect(elem).toBeInTheDocument()
})

it('renders a "Cocktail Name" option', () => {
  render(<SegmentKeySelectorOptions items={items} />)
  const elem = screen.getByText(/Cocktail Name/i)
  expect(elem).toBeInTheDocument()
})

it('should snapshot SegmentKeySelectorOptions', () => {
  const tree = renderer
    .create(<SegmentKeySelectorOptions items={items} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

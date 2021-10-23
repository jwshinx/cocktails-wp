/**
 * @jest-environment jsdom
 */

import React from 'react'
// import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import SegmentValueSelectorOptions from '../SegmentValueSelectorOptions'
import { AlcoholicFilterOptions } from '../../../models/cocktail'

it('renders "Alcoholic", "Non Alcoholic" and "Optional Alcohol" options', () => {
  render(<SegmentValueSelectorOptions items={AlcoholicFilterOptions} />)

  expect(screen.getAllByRole('option', { name: 'Alcoholic' })).toBeTruthy()
  expect(screen.getAllByRole('option', { name: 'Non Alcoholic' })).toBeTruthy()
  expect(
    screen.getAllByRole('option', { name: 'Optional Alcohol' })
  ).toBeTruthy()
})

it('should snapshot SegmentValueSelectorOptions', () => {
  const tree = renderer
    .create(<SegmentValueSelectorOptions items={AlcoholicFilterOptions} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import { SearchInput } from '../SearchInput'

const mockFn = jest.fn(() => true)

it('should render searchbox with "Enter a value" placeholder', () => {
  render(
    <SearchInput placeholderText="Enter a value" setSearchQuery={mockFn} />
  )
  const elemByPlaceholder = screen.getByPlaceholderText(/Enter a value/)
  expect(elemByPlaceholder).toBeInTheDocument()

  const elemByRole = screen.getByRole('searchbox')
  expect(elemByRole).toBeInTheDocument()
})

it('should snapshot SearchInput', () => {
  const tree = renderer
    .create(
      <SearchInput placeholderText="Enter a value" setSearchQuery={mockFn} />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

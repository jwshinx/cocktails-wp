/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

const mockFn = jest.fn(() => true)

import SegmentValueInput from '../SegmentValueInput'

it('should render label "Enter value"', () => {
  render(<SegmentValueInput onSegmentValueChange={mockFn} />)
  const elem = screen.getByText(/Enter value/)
  expect(elem).toBeInTheDocument()
})

it('should snapshot SegmentValueInput', () => {
  const tree = renderer
    .create(<SegmentValueInput onSegmentValueChange={mockFn} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('SegmentValueInput', () => {
  it('should be able to type in input', () => {
    render(<SegmentValueInput onSegmentValueChange={mockFn} />)
    const elem = screen.getByPlaceholderText(/letter or cocktail name/)
    fireEvent.change(elem, { target: { value: 'g' } })
    expect(elem.value).toBe('g')
  })
})

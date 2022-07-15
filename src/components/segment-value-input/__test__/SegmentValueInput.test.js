/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

const mockFn = jest.fn(() => true)

import SegmentValueInput from '../SegmentValueInput'

it('should render label "Enter value"', () => {
  const st = 'search'
  const sk = { label: 'xlabel', name: 'xname', value: 'f' }

  render(
    <SegmentValueInput
      segmentType={st}
      segmentKey={sk}
      onSegmentValueChange={mockFn}
    />
  )
  const elem = screen.getByText(/Enter value/)
  expect(elem).toBeInTheDocument()
})

it('should snapshot SegmentValueInput', () => {
  const st = 'search'
  const sk = { label: 'First Letter', name: 'firstLetter', value: 'f' }

  const tree = renderer
    .create(
      <SegmentValueInput
        segmentType={st}
        segmentKey={sk}
        onSegmentValueChange={mockFn}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('SegmentValueInput', () => {
  it('should be able to type in input', () => {
    const st = 'search'
    const sk = { label: 'First Letter', name: 'firstLetter', value: 'f' }

    render(
      <SegmentValueInput
        segmentType={st}
        segmentKey={sk}
        onSegmentValueChange={mockFn}
      />
    )
    const elem = screen.getByPlaceholderText(/first letter/)
    fireEvent.change(elem, { target: { value: 'g' } })
    expect(elem.value).toBe('g')
  })
})

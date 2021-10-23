/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import ThumbnailArea from '../ThumbnailArea'

const data = {
  strDrink: 'Sidecar',
  idDrink: '45',
  strDrinkThumb: 'http:some-url',
}

it('should render an image with alt value "Sidecar"', () => {
  render(<ThumbnailArea item={data} />)
  const elem = screen.getByAltText(/Sidecar/)
  expect(elem).toBeInTheDocument()
})

it('should snapshot ThumbnailArea', () => {
  const tree = renderer.create(<ThumbnailArea item={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})

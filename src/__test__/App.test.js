/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import chai from 'chai'
import chaiDom from 'chai-dom'
import ReactDOM from 'react-dom'
// import userEvent from "@testing-library/user-event";
import React from 'react'
import renderer from 'react-test-renderer'

import { App } from '../App'

chai.use(chaiDom)
// const { expect } = chai

describe('App.tsx', () => {
  it('click on a button', () => {
    render(<button>Hello World</button>)
    screen.getByText('Hello World')
  })
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('should xxx', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

import React from 'react'
import * as rtl from '@testing-library/react'
// don't forget to import the components you want to test!
import App from './App';

test('sanity test', () => {
  // 1
  // setup of the test
  // involves rendering a component into this virtual DOM
  // create a thing called a "wrapper"
  // which is a collection of tools to interact
  // with the "rendered" component
  // wrapper has this virtual DOM with the JSX mounted in it
  // wrapper has kind of its own selectors for finding elements
  const wrapper = rtl.render(<span className='hello'>Hello, World</span>)
  // wrapper.debug()
  // 2 using the wrapper we capture an element by "readable" something
  const greeting = wrapper.queryByText(/hello, world/i)

  // 3 assert the thing with said readable something is actually there
  expect(greeting).toBeInTheDocument()
})

describe('App', () => {
  it('renders an element that reads have fun', () => {
    // 1- setup, render component to the virtual dom
    const wrapper = rtl.render(<App friend={{ name: 'Zac' }} />)
    // 2- capture the element of interest
    const elementWithHaveFun = wrapper.queryByText(/have fun/i)
    // wrapper.debug()
    // 3- assert thing in DOM
    expect(elementWithHaveFun).toBeInTheDocument()
  })

  it('renders an input with a label "Username"', () => {
    // 1- setup, render app to the virtual dom
    const wrapper = rtl.render(<App friend={{ name: 'Zac' }} />)
    // 2- capture the element of interest
    const withLabelUsername = wrapper.queryByLabelText(/Username/i) // use the ones with "query"
    // 3- assert thing in DOM
    expect(withLabelUsername).toBeInTheDocument()
  })
})

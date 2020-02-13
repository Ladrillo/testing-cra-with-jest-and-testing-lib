import React from 'react'
import * as rtl from '@testing-library/react'
// don't forget to import the components you want to test!

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
  const greeting = wrapper.queryByText(/lady gaga/i)

  // 3 assert the thing with said readable something is actually there
  expect(greeting).toBeInTheDocument()
})

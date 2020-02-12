import React from 'react'
import * as rtl from '@testing-library/react'
// don't forget to import the components you want to test!

test('sanity test', () => {
  const wrapper = rtl.render(<span>Hello, World</span>)
  const greeting = wrapper.queryByText(/hello, world/i)
  expect(greeting).toBeInTheDocument()
})

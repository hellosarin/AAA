import React from 'react'
import { render } from '@testing-library/react'
import Home from './'

test('renders learn react link', () => {
	const { getByText } = render(<Home />)
	const linkElement = getByText(/HomePage/i)
	expect(linkElement).toBeInTheDocument()
})

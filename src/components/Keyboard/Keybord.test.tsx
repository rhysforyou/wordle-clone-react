import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Keyboard from './Keyboard'

describe('Keyboard component', () => {
  it('can input letters', () => {
    const keyPressHandler = jest.fn()
    render(<Keyboard onKeyPress={keyPressHandler} />)

    fireEvent.click(screen.getByText(/a/i, { selector: 'button' }))

    expect(keyPressHandler).toHaveBeenCalledWith('A')
  })
})

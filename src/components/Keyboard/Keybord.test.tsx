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

  it('can input a delete command', () => {
    const deleteHandler = jest.fn()
    render(<Keyboard onDelete={deleteHandler} />)

    fireEvent.click(screen.getByText(/delete/i, { selector: 'button' }))

    expect(deleteHandler).toHaveBeenCalled()
  })

  it('can input an submit command', () => {
    const submitHandler = jest.fn()
    render(<Keyboard onSubmit={submitHandler} />)

    fireEvent.click(screen.getByText(/submit/i, { selector: 'button' }))

    expect(submitHandler).toHaveBeenCalled()
  })
})

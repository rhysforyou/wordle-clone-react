import React from 'react'
import GameRow from './GameRow'

import styles from './GameBoard.module.css'

function GameBoard() {
  const GUESSES = ['     ', '     ', '     ', '     ', '     ']

  return (
    <div className={styles.board}>
      {GUESSES.map((guess) => (
        <GameRow guess={guess} />
      ))}
    </div>
  )
}

export default GameBoard

import React from 'react'
import GameRow from './GameRow'

import styles from './GameBoard.module.css'

function GameBoard() {
  const GUESSES = ['     ', '     ', '     ', '     ', '     ']

  return (
    <div className={styles.board}>
      {GUESSES.map((guess, i) => (
        <GameRow key={i} guess={guess} />
      ))}
    </div>
  )
}

export default GameBoard

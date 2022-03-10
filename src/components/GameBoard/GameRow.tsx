import React from 'react'
import GameTile from './GameTile'

import styles from './GameRow.module.css'

interface GameRowProps {
  guess: string
}

function GameRow({ guess }: GameRowProps) {
  return (
    <div className={styles.row}>
      {Array.from(guess).map((letter, i) => (
        <GameTile key={i} letter={letter} />
      ))}
    </div>
  )
}

export default GameRow

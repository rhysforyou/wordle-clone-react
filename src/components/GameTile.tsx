import React from 'react'

import styles from './GameTile.module.css'

interface GameTileProps {
  letter: string
}

function GameTile({ letter }: GameTileProps) {
  return <div className={styles.tile}>{letter}</div>
}

export default GameTile

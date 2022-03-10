import React from 'react'

import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        Wordle <small>(clone)</small>
      </h1>
    </header>
  )
}

export default Header

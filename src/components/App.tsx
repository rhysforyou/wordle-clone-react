import React from 'react'
import Header from './Header'
import styles from './App.module.css'
import GameBoard from './GameBoard'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <GameBoard />
    </div>
  )
}

export default App

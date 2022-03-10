import React from 'react'
import Header from './Header'
import styles from './App.module.css'
import GameBoard from './GameBoard'
import Keyboard from './Keyboard'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <GameBoard />
      <Keyboard onKeyPress={console.log} />
    </div>
  )
}

export default App

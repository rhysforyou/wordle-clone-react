import React from 'react'
import classNames from 'classnames/bind'

import styles from './Keyboard.module.css'

const cx = classNames.bind(styles)

interface KeyboardProps {
  onKeyPress?: (letter: string) => void
}

interface LetterKeyProps {
  letter: string
  onKeyPress?: (letter: string) => void
}

function LetterKey({ letter, onKeyPress }: LetterKeyProps) {
  return (
    <button
      key={letter}
      className={styles.key}
      onClick={() => onKeyPress?.(letter)}
    >
      {letter}
    </button>
  )
}

function Keyboard({ onKeyPress }: KeyboardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <LetterKey letter="Q" onKeyPress={onKeyPress} />
        <LetterKey letter="W" onKeyPress={onKeyPress} />
        <LetterKey letter="E" onKeyPress={onKeyPress} />
        <LetterKey letter="R" onKeyPress={onKeyPress} />
        <LetterKey letter="T" onKeyPress={onKeyPress} />
        <LetterKey letter="Y" onKeyPress={onKeyPress} />
        <LetterKey letter="U" onKeyPress={onKeyPress} />
        <LetterKey letter="I" onKeyPress={onKeyPress} />
        <LetterKey letter="O" onKeyPress={onKeyPress} />
        <LetterKey letter="P" onKeyPress={onKeyPress} />
      </div>
      <div className={styles.row}>
        <span className={styles.spacer} />
        <LetterKey letter="A" onKeyPress={onKeyPress} />
        <LetterKey letter="S" onKeyPress={onKeyPress} />
        <LetterKey letter="D" onKeyPress={onKeyPress} />
        <LetterKey letter="F" onKeyPress={onKeyPress} />
        <LetterKey letter="G" onKeyPress={onKeyPress} />
        <LetterKey letter="H" onKeyPress={onKeyPress} />
        <LetterKey letter="J" onKeyPress={onKeyPress} />
        <LetterKey letter="K" onKeyPress={onKeyPress} />
        <LetterKey letter="L" onKeyPress={onKeyPress} />
        <span className={styles.spacer} />
      </div>
      <div className={styles.row}>
        <button className={cx('key', 'keyWide')}>ENTER</button>
        <LetterKey letter="Z" onKeyPress={onKeyPress} />
        <LetterKey letter="X" onKeyPress={onKeyPress} />
        <LetterKey letter="C" onKeyPress={onKeyPress} />
        <LetterKey letter="V" onKeyPress={onKeyPress} />
        <LetterKey letter="B" onKeyPress={onKeyPress} />
        <LetterKey letter="N" onKeyPress={onKeyPress} />
        <LetterKey letter="M" onKeyPress={onKeyPress} />
        <button className={cx('key', 'wideKey')}>⌫</button>
      </div>
    </div>
  )
}

export default Keyboard

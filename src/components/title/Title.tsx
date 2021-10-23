import React from 'react'

import styles from './Title.module.css'

export default function Title({ text }: { text: string }) {
  return (
    <div className={`${styles.title}`}>
      <h2 data-testid="title">{text}</h2>
    </div>
  )
}

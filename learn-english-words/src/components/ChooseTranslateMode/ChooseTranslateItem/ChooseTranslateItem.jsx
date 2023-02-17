import React from 'react'
import styles from './ChooseTranslateItem.module.css'
export const ChooseTranslateItem = ({id,translate,checkWord}) => {
  const handleCheckWord = () => {
    checkWord(id)
  }
  return (
    <div className={styles.cards_item} onClick={handleCheckWord}>
      <div className={styles.word}>
        {translate}
      </div>
    </div>
  )
}

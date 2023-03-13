import React from 'react'
import styles from './Table.module.css'
import { TableItem } from './TableItem/TableItem';
export const Table = ({words, isResults ,deleteWord, deleteWordFromDictionary, changeFavourite}) => {

  return (
    <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Word</th>
            <th>Translate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((item,index) => {
            return (
              <TableItem
                index={index}
                id={item.id}
                key={item.id}
                word={item.word}
                translate={item.translate}
                isFavourite={item.is_favourite}
                isResults={isResults}
                deleteWord={deleteWord}
                deleteWordFromDictionary={deleteWordFromDictionary}
                changeFavourite={changeFavourite}
              />
            );
          })}
        </tbody>
      </table>
  )
}

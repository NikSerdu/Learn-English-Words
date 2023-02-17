import React from 'react'
import styles from './Table.module.css'
import { TableItem } from './TableItem/TableItem';
export const Table = ({words, isResults ,deleteWord, deleteWordFromGroup, changeFavourite}) => {

  return (
    <table className={styles.table}>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {words.map((item) => {
            return (
              <TableItem
                id={item.id}
                key={item.id}
                word={item.word}
                translate={item.translate}
                isFavourite={item.is_favourite}
                isResults={isResults}
                deleteWord={deleteWord}
                deleteWordFromGroup={deleteWordFromGroup}
                changeFavourite={changeFavourite}
              />
            );
          })}
        </tbody>
      </table>
  )
}

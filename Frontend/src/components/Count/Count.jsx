
import styles from './Count.module.css'
export const Count = ({number,startNumber}) => {
  return (
    <span className={styles.count}>{number}/{startNumber}</span>
  )
}

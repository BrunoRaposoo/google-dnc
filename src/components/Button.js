import styles from './Button.module.css'

export function Button(props) {
  return (
    <div className={styles.btn}>
      <button>{props.name}</button>
    </div>
  )
}
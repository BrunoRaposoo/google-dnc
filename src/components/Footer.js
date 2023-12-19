import styles from './Footer.module.css'

export function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.location}>
        <p>{props.location}</p>
      </div>
      <div className={styles.leftwords}>
        <p>{props.about}</p>
        <p>{props.publ}</p>
        <p>{props.business}</p>
        <p>{props.works}</p>
      </div>
      <div className={styles.rightwords}>
        <p>{props.private}</p>
        <p>{props.terms}</p>
        <p>{props.config}</p>
      </div>
    </div>
  )
}
import optionImg from './assets/options.svg'
import photo from './assets/photo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.header}>
      <p>Gmail</p>
      <p>Imagens</p>
      <img src={optionImg} alt="ERROR" />
      <div>
        <img id='photo-perfil' src={photo} alt="ERROR" />
      </div>
    </div>
  )
}
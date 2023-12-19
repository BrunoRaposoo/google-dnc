import google from './assets/google.svg'
import search from './assets/search.svg'
import keyborad from './assets/keyboard.svg'
import phone from './assets/phone.svg'
import protection from './assets/protection.svg'

import styles from './Main.module.css'
import { Button } from './Button'

export function Main() {
  return (
    <div className={styles.main}>
      <img src={google} alt="" />
      <div className={styles.inputCamp}>
        <div className={styles.insideInputCamp}>
          <img src={search} alt="" />
          <input type="text" />
        </div>
        <div className={styles.keyandphone}>
          <img src={keyborad} alt="" />
          <img src={phone} alt="" />
        </div>
      </div>

      <div className={styles.btn}>
        <Button name='Pesquisa Google'/>
        <Button name='Estou com sorte'/>
      </div>

      <div className={styles.protection}>
        <img src={protection} alt="ERROR" />
        <p>Faça o Check-up de privacidade</p>
      </div>
    </div>
  )
}
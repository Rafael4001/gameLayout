import React from 'react';
// import classNames from 'classnames';

import styles from './Homepage.module.scss';

import {
  HAPPY_CARE,
  FORTUNE_COOKIE,
  FORTUNE_COOKIE_2,
  USER_AVATAR,
  GUN_1,
  SUPPORT_ICON,
} from '../../constants'

const VAR_1 = 756;

const Homepage = () => {

  return (
    <div className={styles.mainContainer}>

      <div className={styles.userStatus}>
        <img
          src={USER_AVATAR}
          alt={"HAPPY_CARE"}
          className={styles.iconContainer}
        />
        <span> ONLINE:</span>
        <span className={styles.userStatusAmount}>{VAR_1}</span>
      </div>

      <div className={styles.buttonsContainer}>

        <div className={styles.rhombus_1}>
          <img
            src={HAPPY_CARE}
            alt={"HAPPY_CARE"}
            className={styles.iconContainer}
          />
          <div>ODBIERZ DZIENNY BONUS</div>
        </div>

        <div className={styles.rhombus_2}>
          <img
            src={FORTUNE_COOKIE}
            alt={"HAPPY_CARE"}
            className={styles.iconContainerFORTUNE_COOKIE}
          />
          <div>LOTERIA W CIEMNO</div>
          <img
            src={FORTUNE_COOKIE_2}
            alt={"HAPPY_CARE"}
            className={styles.iconContainerFORTUNE_COOKIE_2}
          />

        </div>

        <div className={styles.rhombus_3}>
          <div className={styles.text_1}>BEST DROP:</div>
          <div>SAFARI MESH</div>
          <img
            src={GUN_1}
            alt={"HAPPY_CARE"}
            className={styles.gunImage}
          />
        </div>

        <div className={styles.gunsdropContainer}>
          DODAJ<span className={styles.gunsDropText}>"GUNSDROP"</span>DO SWOJEGO NICKU I ZGARNIJ +5% DO DROPA
        </div>
      </div>
      <div className={styles.supportContainer}>
        <img
          src={SUPPORT_ICON}
          alt={"HAPPY_CARE"}
          className={styles.iconContainer}
        />
        <span> SUPPORT</span>
      </div>

    </div>
  )
}


export default Homepage
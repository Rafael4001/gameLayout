import React from 'react';
// import classNames from 'classnames';

import styles from './Homepage.module.scss';

import {
  HAPPY_CARE,
  FORTUNE_COOKIE,
  FORTUNE_COOKIE_2,
  USER_AVATAR,
  GUN_1,
} from '../../constants'

const VAR_1 = 756;

const Homepage = () => {

  return (
    <div className={styles.mainContainer}>

      <div className={styles.userStatus}>
        <img
          src={USER_AVATAR}
          alt={"HAPPY_CARE"}
          className={styles.iconContainerFORTUNE_COOKIE}
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
          <span className={styles.text_1}>BEST DROP: </span>
          <span>SAFARI MESH</span>
          <img
            src={GUN_1}
            alt={"HAPPY_CARE"}
            className={styles.iconContainerFORTUNE_COOKIE_2}
          />
        </div>

      </div>


    </div>
  )
}


export default Homepage
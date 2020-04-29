import React from 'react';
// import classNames from 'classnames';

import styles from './Homepage.module.scss';

import { HAPPY_CARE } from '../../constants'

const VAR_1 = 756;

const Homepage = () => {

  return (
    <div className={styles.mainContainer}>

      <div className={styles.userStatus}>ONLINE: <span className={styles.userStatusAmount}>{VAR_1}</span></div>

      <div className={styles.buttonsContainer}>
        <div className={styles.rhombus}>
          <img
            src={HAPPY_CARE}
            alt={"HAPPY_CARE"}
            className={styles.iconContainer}
          />
          <div>ODBIERZ DZIENNY BONUS</div>
        </div>
        <div className={styles.rhombus}>
          <img
            src={HAPPY_CARE}
            alt={"HAPPY_CARE"}
            className={styles.iconContainer}
          />
          <div> LOTERIA W CIEMNO</div>
        </div>
        <div className={styles.rhombus}>TEXT 3</div>
      </div>


    </div>
  )
}


export default Homepage
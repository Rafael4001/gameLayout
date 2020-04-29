import React from 'react';

import {
  LOGIN_ICON,
  STREAM_ICON,
  VIP_DISTRICT,
  CASH_BILLS,
  HOME_ICON,
  CHARGE_BATTERY,
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
} from '../../../constants'

import styles from './MenuBarBellow.module.scss';


const menuItem = [
  {
    text: 'STRONA GLOWNA',
    classSpecial: styles.homepage,
    iconName: HOME_ICON,
  },
  {
    text: 'DOLADUJ',
    classSpecial: styles.charge,
    iconName: CHARGE_BATTERY,
  },
  {
    text: 'ZARABIAJ',
    classSpecial: styles.earn,
    iconName: VIP_DISTRICT, //brakuje ikony
  },
  {
    text: 'WYPLAC',
    classSpecial: styles.withdrawItem,
    iconName: CASH_BILLS,
  },
  {
    text: 'STREFA VIP',
    classSpecial: styles.vipDistrictItem,
    iconName: VIP_DISTRICT,
  },
]

const MenuBarBellow = () => {

  return (
    <div className={styles.mainContainer}>
      <div>

      </div>

      {
        menuItem.map((item) => (
          <div className={item.classSpecial}>
            <div className={styles.screwX}>
              <img
                src={item.iconName}
                alt={`${item.iconName}`}
                className={styles.iconContainer}
              />
              <span>{item.text}</span>
            </div>
          </div>
        ))
      }


      <div className={styles.loginItem}>
        <div className={styles.screwX}>
          <img
            src={LOGIN_ICON}
            alt={"LOGIN_ICON"}
            className={styles.iconContainer}
          />
          <span>ZALOGUJ PRZEZ SYSTEM</span>
          <img
            src={STREAM_ICON}
            alt={"STREAM_ICON"}
            className={styles.iconContainer}
          />
        </div>
      </div>
    </div>
  )
}


export default MenuBarBellow
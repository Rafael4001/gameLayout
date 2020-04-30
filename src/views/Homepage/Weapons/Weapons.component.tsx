import React from 'react';

import {
  BOX,
  IMAGE_1,
  IMAGE_2,
  IMAGE_3,
  IMAGE_4,
  IMAGE_5,
  IMAGE_6,
  IMAGE_7,
  GOLD_STAR,
} from '../../../constants'

import styles from './Weapons.module.scss';


const menuItem = [
  {
    text: 'MECHA INDUSTRIES',
    classSpecial: styles.mechaIndustries,
    iconName: IMAGE_1,
    isStar: false,
  },
  {
    text: 'ASIMOV',
    classSpecial: styles.image_2_Styles,
    iconName: IMAGE_2,
    isStar: false,
  },
  {
    text: 'MECHA INDUSTRIES',
    classSpecial: styles.image_3_Styles,
    iconName: IMAGE_3,
    isStar: true,
  },
  {
    text: 'FRANKLIN',
    classSpecial: styles.homepage,
    iconName: IMAGE_4,
    isStar: false,
  },
  {
    text: 'MECHA INDUSTRIES',
    classSpecial: styles.homepage,
    iconName: IMAGE_5,
    isStar: false,
  },
  {
    text: 'FADE',
    classSpecial: styles.homepage,
    iconName: IMAGE_6,
    isStar: false,
  },
]

const Weapons = () => {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.itemsContainer}>
        <div className={styles.openChests}>
          <div className={styles.screwX}>
            <div className={styles.insideContainer}>
              <div>OTWORZONE SKRZYNKI</div>

              <div className={styles.scoreContainer}>
                <img
                  src={BOX}
                  alt={`BOX`}
                  className={styles.iconContainer}
                />
                <div>25 019</div>
              </div>
            </div>
          </div>
        </div>

        {
          menuItem.map((item) => (
            <div className={item.classSpecial}>
              {item.isStar &&
              <img
                src={GOLD_STAR}
                alt={`GOLD_STAR`}
                className={styles.goldStarImage}
              />
              }
              <div className={styles.screwX}>
                <span>{item.text}</span>
                <img
                  src={item.iconName}
                  alt={`${item.iconName}`}
                  className={styles.iconContainer}
                />
              </div>
            </div>
          ))
        }

        <div className={styles.openChests}>
          <div className={styles.screwX}>
            <img
              src={IMAGE_7}
              alt={`IMAGE_7`}
              className={styles.iconContainer}
            />
            <div>OSTATNI DROP</div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Weapons
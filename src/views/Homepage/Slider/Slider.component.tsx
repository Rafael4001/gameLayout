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

import styles from './Slider.module.scss';


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

const Slider = () => {

  return (
    <div className={styles.mainContainer}>
    </div>
  )
}


export default Slider
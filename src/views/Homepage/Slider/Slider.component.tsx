import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ButtonRhombus from '../../../components/ButtonRhombus'

import { WORLD, SOLDIER_2 } from '../../../constants'

import styles from './Slider.module.scss';

const getSlide_1 = () => (
  <div>
    <img src={WORLD}/>

    <div className={styles.contentContainer}>
      <div className={styles.textContainer}>
        <div className={styles.firstLine}>
          <span className={styles.chanceText}>+30%</span>
          <span className={styles.middleText}>SZANS W LOTERII</span>
          <span className={styles.darkText}>W CIEMNO</span>
        </div>
        <div className={styles.secondLine}>
          <span>DO KONCA TEGO TYGODNIA</span>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <ButtonRhombus
          text={"ZAGRAJ"}
          onClick={() => alert('Halo')}
          className={styles.buttonCustomClass}
        />
      </div>

      <div className={styles.soldierContainer}>
        <img src={SOLDIER_2} alt={"SOLDIER_2"} className={styles.soldier}/>
      </div>
    </div>
  </div>
)

const getSlide_2 = () => (
  <img src={WORLD} className={styles.image}/>
)

const Slider = () => (
  <div className={styles.mainContainer}>
    <Carousel
      showStatus={false}
      showThumbs={false}
    >{getSlide_1()}

      {getSlide_2()}
    </Carousel>
  </div>
)

export default Slider
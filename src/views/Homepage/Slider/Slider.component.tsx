import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ButtonRhombus from '../../../components/ButtonRhombus'

import { WORLD } from '../../../constants'

import styles from './Slider.module.scss';

const Slider = () => {

  return (
    <div className={styles.mainContainer}>
      <Carousel
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={WORLD} className={styles.image}/>
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
                onClick={()=>alert('Halo')}
                className={styles.buttonCustomClass}
              />
            </div>
          </div>
        </div>

        <div>
          <img src={WORLD} className={styles.image}/>
          {/*<p className="legend">Legend 1</p>*/}
        </div>
      </Carousel>
    </div>
  )
}


export default Slider
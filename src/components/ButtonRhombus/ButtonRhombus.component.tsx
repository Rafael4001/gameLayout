import React from 'react';

import { IButtonRhombus } from './ButtonRhombus.types'
import classNames from 'classnames'

import styles from './ButtonRhombus.module.scss';

const ButtonRhombus: React.FC<IButtonRhombus> = ({text, onClick, className: customStyles}) => {

  return (
    <button
      className={classNames(styles.mainContainer, customStyles)}
      onClick={onClick}
    >
      <div className={styles.skewXContainer}>
        {text}
      </div>
    </button>
  )
}


export default ButtonRhombus
import React from 'react';
import './App.css';

import MenuBar from '../Homepage/MenuBar'
import MenuBarBellow from '../Homepage/MenuBarBellow'
import Weapons from '../Homepage/Weapons'
import Slider from '../Homepage/Slider'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainerFilter}>
        <MenuBar/>
        <MenuBarBellow/>
        <Weapons/>
        <Slider/>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import MenuBar from '../Homepage/MenuBar'
import MenuBarBellow from '../Homepage/MenuBarBellow'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.mainContainer}>
      <MenuBar/>
      <MenuBarBellow/>
    </div>
  );
}

export default App;

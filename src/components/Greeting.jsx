import React, { useState } from 'react';
import styles from '../styles/Greeting.module.css';
import TopHeader from './TopHeader';

const Greeting = ({ theme }) => {
    
  return (
    <div className={` ${styles[theme]}`}>
      <div className={styles.left}>
        <h1>Hello Chhavi</h1>
        <p>Ready for the trip?</p>
      </div>
      <div className={styles.right}>
        <div className={styles.circle}>C</div>
      </div>
    </div>
  );
};

export default Greeting;

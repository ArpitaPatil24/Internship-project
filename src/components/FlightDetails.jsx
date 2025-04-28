import React from 'react';
import styles from '../styles/FlightDetails.module.css';
import { FaArrowRightLong } from "react-icons/fa6";

const FlightDetails = () => {
  return (
    <div className={styles.flightContainer}>
        <div className={styles.flight}>
      <div className={styles.header}>
        <h2 className={styles.title}>Flight Details</h2>
        <p className={styles.seeAll}>See All</p>
      </div>
      <div className={styles.dateTime}>
        26.01.2025, 10:50am
      </div>

      <div className={styles.flightInfo}>
        <div className={styles.codes}>
          <span className={styles.code}>DEL</span>
          <span className={styles.arrow}><FaArrowRightLong /></span>
          <span className={styles.code}>NRT</span>
        </div>
        <div className={styles.route}>
          <span>Delhi, India</span>
          <span>Narita, Tokyo</span>

        </div>
      </div>
      <img
            src="/images/plan.png"  // Replace with the path to your image
            alt="Trip to Tokyo"
            className={styles.planImage}
        />
    </div>
    </div>
  );
};

export default FlightDetails;

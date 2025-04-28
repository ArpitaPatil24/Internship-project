import React from 'react';
import styles from '../styles/UpcomingTrip.module.css'; // Assuming you have a separate CSS module for this component
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const UpcomingTrip = ({ theme }) => {
  return (
    <div className={`${styles[theme]} `}>
      <div className={styles.left}>
        <h1>Your Upcoming Trip</h1>
        <div className={styles.imageContainer}>
          <img
             src="/images/tokyo.png"  // Replace with the path to your image
            alt="Trip to Tokyo"
            className={styles.tripImage}
          />
          <div className={styles.tripDetails}>
            <h2>TOKYO</h2>
            <p>27.01.2025 - 02.02.2025</p>
          </div>
          <MdArrowOutward className={styles.errorIcon} />

          <div className={styles.infoContainer}>
            {/* Info Item 1 */}
           <div className={styles.infoItem}>
            <div className={styles.iconWithText}>
            <div className={styles.iconCircle}><AiOutlineClockCircle size={18}/></div>
                <div className={styles.mainText}>8 Days</div>
            </div>
            <div className={styles.subText}>Duration</div>
           </div>

            {/* Info Item 2 */}
           <div className={styles.infoItem}>
            <div className={styles.iconWithText}>
            <div className={styles.iconCircle}><BsFillPeopleFill size={18}/></div>
                <div className={styles.mainText}>4 (2M,2F)</div>
            </div>
            <div className={styles.subText}>Group Size</div>
           </div>

            {/* Info Item 3 */}
           <div className={styles.infoItem}>
           <div className={styles.iconWithText}>
            <div className={styles.iconCircle}><BsFillJournalBookmarkFill size={18}/></div>
                <div className={styles.mainText}>14</div>
            </div>
            <div className={styles.subText}>Activities</div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTrip;

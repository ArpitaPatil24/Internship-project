import React, { useState } from 'react';
import styles from '../styles/Activities.module.css';
import { PiPersonSimpleHikeLight } from "react-icons/pi";

const Activities = ({ theme }) => {
  const [activeOption, setActiveOption] = useState('Day Plan');
  const [activeDateIndex, setActiveDateIndex] = useState(0); // Default to first date

  const dates = [
    { day: 'MON', date: 27 },
    { day: 'TUE', date: 28 },
    { day: 'WED', date: 29 },
    { day: 'THU', date: 30 },
    { day: 'FRI', date: 31 },
    { day: 'SAT', date: 1 },
  ];

  const selectedDate = dates[activeDateIndex];
  const dayNumber = activeDateIndex + 1;

  return (
    <div className={`${styles.activitiesContainer} ${styles[theme]}`}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Activities</h2>
        <span className={styles.seeAll}>See All</span>
      </div>

      <div className={styles.main}>
        {/* Options */}
        <div className={styles.options}>
          <div
            className={`${styles.option} ${activeOption === 'Day Plan' ? styles.activeOption : ''}`}
            onClick={() => setActiveOption('Day Plan')}
          >
            Day Plan
          </div>

          <div
            className={`${styles.option} ${activeOption === '14 Activities' ? styles.activeOption : ''}`}
            onClick={() => setActiveOption('14 Activities')}
          >
            14 Activities
          </div>
        </div>

        {/* Date Row */}
        <div className={styles.dateRow}>
          {dates.map((item, index) => (
            <div
              key={index}
              className={`${styles.dateItem} ${activeDateIndex === index ? styles.activeDateItem : ''} ${(item.day === 'MON' && item.date === 27) || (item.day === 'SAT' && item.date === 1) ? styles.wideDateItem : ''}`}
              onClick={() => setActiveDateIndex(index)}
            >
              <div className={styles.dateWithMonth}>
                {((item.day === 'MON' && item.date === 27) || (item.day === 'SAT' && item.date === 1)) && (
                  <div className={`${styles.monthLabel} ${activeDateIndex === index ? styles.activeMonthLabel : ''}`}>
                    {item.day === 'MON' ? 'JAN' : 'FEB'}
                  </div>
                )}
                <div className={styles.dayContent}>
                  <div className={styles.dayName}>{item.day}</div>
                  <div className={styles.dayNumber}>{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Section */}
      <div className={styles["activity-container"]}>
        <div className={styles["day-info"]}>
          <span>Day {dayNumber} {`${selectedDate.date < 10 ? '0' : ''}${selectedDate.date}.01.2025`}</span>
        </div>
        <div className={styles["activity-info"]}>
          <span className={styles["hiking-symbol"]}><PiPersonSimpleHikeLight size={20} /></span>
          <span className={styles["activity-text"]}>
            <strong>3</strong> Activities
          </span>
        </div>
      </div>
    </div>
  );
};

export default Activities;

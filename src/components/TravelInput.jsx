import React, { useState } from 'react';
import { FaPerson } from "react-icons/fa6";
import { TbFriends } from "react-icons/tb";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { RiCalendarLine } from "react-icons/ri";
import styles from '../styles/TravelInput.module.css'; // Import the CSS module

const TravelInput = ({ theme }) => {
  const [selectedGroup, setSelectedGroup] = useState('');

  // Function to handle selection
  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <>
      <div className={`${styles["input-group"]} ${styles[theme]}`}>
        <label htmlFor="destination" className={styles["input-label"]}>
          Where would you like to go?
        </label>
        <span className={` ${styles["input-icon"]} ${styles[theme]}`}>
          <CiLocationOn size={24} />
        </span>
        <input
          id="destination"
          type="text"
          placeholder="Enter Destination"
          className={` ${styles["input-field"]} ${styles[theme]}`}
        />
      </div>
  
      <div className={` ${styles["input-group"]} ${styles[theme]}`}>
        <label className={styles["input-label"]}>How long will you stay?</label>
        <div className={styles['input-icon-wrapper']}>
          <RiCalendarLine size={20} className={styles['input-icon']} />
          <select className={styles["input-select"]}>
            <option>Select Duration</option>
            <option>1-3 days</option>
            <option>4-7 days</option>
            <option>1-2 weeks</option>
          </select>
        </div>
      </div>
  
      <div className={` ${styles['traveling-with']} ${styles["input-group"]}`}>
        <label className={styles['input-label']}>Who are you traveling with?</label>
        <div className={` ${styles['travel-options']} ${styles[theme]}`}>
          <button
            className={`${styles['travel-option-btn']} ${selectedGroup === 'Solo' ? `${styles['selected']} ${styles[theme]}` : styles[theme]}`}
            onClick={() => handleGroupSelect('Solo')}
          >
            <FaPerson size={20} /> Solo
          </button>
  
          <button
            className={`${styles['travel-option-btn']} ${selectedGroup === 'Couple' ? `${styles['selected']} ${styles[theme]}` : styles[theme]}`}
            onClick={() => handleGroupSelect('Couple')}
          >
            <TbFriends size={20} /> Couple
          </button>
  
          <button
            className={`${styles['travel-option-btn']} ${selectedGroup === 'Family' ? `${styles['selected']} ${styles[theme]}` : styles[theme]}`}
            onClick={() => handleGroupSelect('Family')}
          >
            <MdOutlineFamilyRestroom size={20} /> Family
          </button>
  
          <button
            className={`${styles['travel-option-btn']} ${selectedGroup === 'Friends' ? `${styles['selected']} ${styles[theme]}` : styles[theme]}`}
            onClick={() => handleGroupSelect('Friends')}
          >
            <GiThreeFriends size={20} /> Friends
          </button>
        </div>
      </div>
    </>
  );
};

export default TravelInput;

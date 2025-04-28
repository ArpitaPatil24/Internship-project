// TopHeader.jsx
import React from 'react';
import { FaSignal, FaWifi, FaBatteryFull, FaSun, FaMoon } from 'react-icons/fa';
import styles from '../styles/TopHeader.module.css';

const TopHeader = ({ theme, toggleTheme }) => {
  return (
    <div className={styles["top-header"]}>
      <div className={styles.time}>9:41</div>

      <div className={styles["internet-status"]}>
        <FaSignal size={20} />
        <FaWifi size={20} />
        <FaBatteryFull size={20} />
        
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className={styles["theme-toggle-btn"]}>
          {theme === 'light' ? (
            <FaMoon size={18} color="black" />
          ) : (
            <FaSun size={18} color="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TopHeader;

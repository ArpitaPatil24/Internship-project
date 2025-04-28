import React, { useState } from 'react';
import { CiHome, CiSearch, CiHeart, CiUser } from 'react-icons/ci'; // Import your icons
import { FaPlus } from 'react-icons/fa'; // Import the plus icon
import styles from '../styles/Footer.module.css'; // Your CSS file

const Footer = ({ theme }) => {  // <<< accept theme prop
  const [activeIndex, setActiveIndex] = useState(null);

  const handleIconClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={`${styles.footer} ${theme === 'dark' ? styles.darkFooter : ''}`}>
      {/* Home Icon */}
      <div
        className={`${styles.icon} ${activeIndex === 0 ? styles.active : ''} ${theme === 'dark' ? styles.darkIcon : ''}`}
        onClick={() => handleIconClick(0)}
      >
        <CiHome size={24} />
      </div>

      {/* Search Icon */}
      <div
        className={`${styles.icon} ${activeIndex === 1 ? styles.active : ''} ${theme === 'dark' ? styles.darkIcon : ''}`}
        onClick={() => handleIconClick(1)}
      >
        <CiSearch size={24} />
      </div>

      {/* Plus Icon */}
      <div
        className={`${styles.plusIcon} ${activeIndex === 2 ? styles.active : ''} ${theme === 'dark' ? styles.darkIcon : ''}`}
        onClick={() => handleIconClick(2)}
      >
        <FaPlus size={24} />
      </div>

      {/* Heart Icon */}
      <div
        className={`${styles.icon} ${activeIndex === 3 ? styles.active : ''} ${theme === 'dark' ? styles.darkIcon : ''}`}
        onClick={() => handleIconClick(3)}
      >
        <CiHeart size={24} />
      </div>

      {/* User Icon */}
      <div
        className={`${styles.icon} ${activeIndex === 4 ? styles.active : ''} ${theme === 'dark' ? styles.darkIcon : ''}`}
        onClick={() => handleIconClick(4)}
      >
        <CiUser size={24} />
      </div>
    </div>
  );
};

export default Footer;

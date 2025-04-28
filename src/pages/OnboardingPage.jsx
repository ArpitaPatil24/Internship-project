import React, {useState} from 'react';
import styles from '../styles/OnboardingPage.module.css'; // Make sure the path to the CSS is correct
import TopHeader from '../components/TopHeader';
import TravelInput from '../components/TravelInput';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom


const OnboardingPage = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContinue = () => {
    navigate('/dashboard'); // Navigate to MainDashboard when Continue is clicked
  };
  return (
    <div className={`${styles['onboarding-container']} ${styles[theme]}`}>
      <TopHeader theme={theme} toggleTheme={toggleTheme} />

      <h1 className={styles["onboarding-title"]}>
        Plan Your Journey, Your Way!
      </h1>
      <p className={`${styles["onboarding-subtitle"]} ${styles[theme]}`}>
        Let's create your personalised travel experience
      </p>
      <TravelInput theme={theme} />
      <button className={styles["continue-button"]} onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default OnboardingPage;

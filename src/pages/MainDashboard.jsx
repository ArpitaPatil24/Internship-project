import React, {useState} from 'react';
import Greeting from '../components/Greeting';
import styles from "../styles/MainDashboard.module.css";
import TopHeader from '../components/TopHeader';
import UpcomingTrip from '../components/UpcomingTrip';
import FlightDetails from '../components/FlightDetails';
import Footer from '../components/Footer';
import Accommodation from '../components/Accommodation';
import Activities from '../components/Activities';
import VisitingPlaces from '../components/VisitingPlaces';

const MainDashboard = () => {
     const [theme, setTheme] = useState('light');
    
      const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
      };
  return (
    <div className={`${styles['dashboard-container']} ${styles[theme]}`}>
      <TopHeader theme={theme} toggleTheme={toggleTheme} />
      <Greeting theme={theme}/>
      <UpcomingTrip theme={theme}/>
      <FlightDetails theme={theme}/>
      <Accommodation theme={theme}/>
      <Activities theme={theme}/>
      <VisitingPlaces theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
}

export default MainDashboard;

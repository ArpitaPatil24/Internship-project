import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Accommodation.module.css';
import { GiConfirmed } from "react-icons/gi";

// Reusable AccommodationCard component
// Reusable AccommodationCard component
const AccommodationCard = ({ image, name, checkIn, checkOut, status, rating, theme }) => (
  <div className={`${styles.card} ${theme === 'dark' ? styles.darkCard : styles.lightCard}`}>
    <div className={styles.imageContainer}>
      <img src={image} alt={name} />
      {/* Rating Badge */}
      <div className={styles.ratingBadge}>
        <span>{rating}</span>
      </div>
    </div>
    <div className={styles.details}>
      <h3>{name}</h3>
      <p>Check in: {checkIn}</p>
      <p>Check out: {checkOut}</p>
    </div>
    {/* Card Footer with Dynamic Status */}
    <div className={styles.cardFooter}>
      <span className={styles.nights}>2 nights</span>
      <span className={styles.confirmed}>
        {status === "Confirmed" ? (
          <>
            <span className={styles.confirmedIcon}><GiConfirmed  size={20}/></span> {/* Checkmark for confirmed */}
            {status}
          </>
        ) : (
          <span className={styles.pending}>
            <span className={styles.pendingIcon}><GiConfirmed size={20}/></span> {/* Checkmark for pending */}
            {status}
          </span>
        )}
      </span>
    </div>
  </div>
);


const Accommodation = ({ theme }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = containerRef.current;
      if (container) {
        // Scroll by one card width (plus margin if any)
        container.scrollBy({
          left: 320, // adjust this if your card+gap is different
          behavior: 'smooth'
        });

        // If reached (or very close to) end, reset to start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          }, 500); // Wait for current smooth scroll to finish
        }
      }
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const accommodationData = [
    {
      image: "/images/acm1.png",
      name: "Shinagawa Prince Hotel",
      checkIn: "26.01.2025, 11:15pm",
      checkOut: "28.01.2025, 11:15am",
      status: "Confirmed", // First card confirmed
      rating: "★ 4.0 Very Good", // Added rating for the first card
    },
    {
      image: "/images/acm2.png",
      name: "Mercure Tokyo Hotel",
      checkIn: "28.01.2025, 6:00pm",
      checkOut: "30.01.2025, 11:15am",
      status: "Pending", // Second card pending
      rating: "★ 4.1 Very Good", // Added rating for the first card
    },
    {
      image: "/images/acm2.png",
      name: "Shinagawa Prince Hotel",
      checkIn: "02.02.2025, 11:15pm",
      checkOut: "04.02.2025, 11:15am",
      status: "Pending", // Third card pending
      rating: "★ 4.1 Very Good", // Added rating for the first card
    },
    // Add more accommodation data here as needed
  ];

  return (
    <div className={`${styles.accommodationContainer} ${theme === 'dark' ? styles.darkContainer : ''}`}>
      <div className={styles.header}>
        <h2>Accommodation</h2>
        <span className={styles.seeAll}>See All</span>
      </div>

      <div className={`${styles.cardContainer} ${theme === 'dark' ? styles.dark : ''}`} ref={containerRef}>
        {accommodationData.map((accommodation, index) => (
          <AccommodationCard
            key={index}
            image={accommodation.image}
            name={accommodation.name}
            checkIn={accommodation.checkIn}
            checkOut={accommodation.checkOut}
            status={accommodation.status}
            rating={accommodation.rating} // Pass rating data here
            theme={theme} // Pass the theme prop here
          />
        ))}
      </div>
    </div>
  );
};

export default Accommodation;

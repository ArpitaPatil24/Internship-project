import React from 'react';
import styles from '../styles/VisitingPlaces.module.css';

const VisitingPlaces = ({ theme }) => {
  // Array of image URLs for the three cards
  const imageUrls = [
    'images/img1.png', // Replace with actual image URL
    'images/img2.png', // Replace with actual image URL
    'images/img3.png', // Replace with actual image URL
  ];

  // Array of text for each card
  const cardDetails = [
    {
      title: "Senso-ji Temple &",
      subtitle: "Nakamise Shopping Street",
      location: "Senso-ji",
      timing: "Timing: 8:15am Morning",
      duration: "Duration: 3 hours",
      pickUp: "Pick Up: From Hotel",
    },
    {
      title: "Tokyo Sky Tree",
      subtitle: "",
      location: "",
      timing: "Timing: 1:00pm Afternoon",
      duration: "Duration: 3 hours",
      pickUp: "Pick Up: From Nakamise Street",
    },
    {
      title: "Kimono Wearing",
      subtitle: "",
      location: "",
      timing: "Timing: Anytime before 8:00pm",
      duration: "Duration: 1-2 hours",
      pickUp: "Pick Up: From Hotel",
    },
  ];

  // Define class names based on the theme
  const cardClass = theme === 'dark' ? styles.darkCard : styles.lightCard;
  const textClass = theme === 'dark' ? styles.darkText : styles.lightText;
  const containerClass = theme === 'dark' ? styles.darkContainer : styles.lightContainer;

  return (
    <div className={`${styles.activitiesContainer} ${containerClass}`}>
      {/* Cards Section */}
      <div className={styles.cardsContainer}>
        {['Card 1', 'Card 2', 'Card 3'].map((_, index) => (
          <div key={index} className={`${styles.card} ${cardClass}`}>
            <div className={styles.cardImageContainer}>
              <img 
                src={imageUrls[index]} // Dynamically assign image based on index
                alt={`Card Image ${index + 1}`} // Descriptive alt text
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardText}>
              <span className={`${styles.cardTitle} ${textClass}`}>{cardDetails[index].title}</span>
              <span className={`${styles.cardSubtitle} ${textClass}`}>{cardDetails[index].subtitle}</span>
              <span className={`${styles.cardLocation} ${textClass}`}>{cardDetails[index].location}</span>
              <span className={`${styles.cardTiming} ${textClass}`}>{cardDetails[index].timing}</span>
              <span className={`${styles.cardDuration} ${textClass}`}>{cardDetails[index].duration}</span>
              <span className={`${styles.cardPickUp} ${textClass}`}>{cardDetails[index].pickUp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitingPlaces;

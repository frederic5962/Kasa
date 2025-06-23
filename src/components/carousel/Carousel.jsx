import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './carousel.module.scss';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  if (images.length === 1) {
    return (
      <div className={styles.carousel}>
        <img src={images[0]} alt="Galerie" className={styles.image} />
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1} sur ${images.length}`}
        className={styles.image}
      />
      <button className={`${styles.navButton} ${styles.prev}`} onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
      </button>

      <button className={`${styles.navButton} ${styles.next}`} onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
      </button>

      <div className={styles.indicator}>
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

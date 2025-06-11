import { useParams } from 'react-router-dom';
import logementsData from '../../../public/data/logements.json';
import { useState } from 'react';
import styles from './logement.module.scss';

function Logement() {
  const { id } = useParams();
  const logement = logementsData.find(l => l.id === id);
  const [index, setIndex] = useState(0);

  if (!logement) {
    return <h2>Logement non trouvé</h2>;
  }

  const nextImage = () => setIndex((index + 1) % logement.pictures.length);
  const prevImage = () =>
    setIndex((index - 1 + logement.pictures.length) % logement.pictures.length);

  return (
    <div className={styles.logementPage}>
      {/* Carrousel d'images */}
      <div className={styles.carrousel}>
        <button className={styles.prevButton} onClick={prevImage}>
          ◀️
        </button>
        <div className={styles.imageContainer}>
          <img
            src={logement.pictures[index]}
            alt={`Image ${index + 1}`}
            className={styles.image}
          />
          <p className={styles.counter}>
            {index + 1} / {logement.pictures.length}
          </p>
        </div>
        <button className={styles.nextButton} onClick={nextImage}>
          ▶️
        </button>
      </div>

      {/* En-tête du logement */}
      <div className={styles.logementHeader}>
        <h1 className={styles.logementTitle}>{logement.title}</h1>
        <p className={styles.location}>{logement.location}</p>
      </div>

      {/* Tags */}
      <div className={styles.tagsContainer}>
        <ul className={styles.tags}>
          {logement.tags.map((tag, index) => (
            <li key={index} className={styles.tagItem}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Blocs Description et Équipements */}
      <div className={styles.detailsContainer}>
        {/* Bloc Description */}
        <div className={`${styles.detailsBlock} ${styles.descriptionBlock}`}>
          <h2>Description</h2>
          <p>{logement.description}</p>
        </div>

        {/* Bloc Équipements */}
        <div className={`${styles.detailsBlock} ${styles.equipmentsBlock}`}>
          <h2>Équipements</h2>
          <ul>
            {logement.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Logement;

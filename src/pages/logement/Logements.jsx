import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './logement.module.scss';
import Accordion from '../../components/accordion/Accordion';
import useFetchLogement from '../../hooks/useFetchLogement';

export default function Logement() {
  const { id } = useParams();
  const { logement, loading, notFound } = useFetchLogement(id);
  const [index, setIndex] = useState(0);

  if (notFound) {
    return <Navigate to="/404" />;
  }

  if (loading || !logement) {
    return <h2>Chargement...</h2>;
  }

  const nextImage = () => setIndex((index + 1) % logement.pictures.length);
  const prevImage = () =>
    setIndex((index - 1 + logement.pictures.length) % logement.pictures.length);

  return (
    <div className={styles.logementPage}>
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

      <div className={styles.logementHeader}>
        <h1 className={styles.logementTitle}>{logement.title}</h1>
        <p className={styles.location}>{logement.location}</p>
      </div>

      <div className={styles.tagsContainer}>
        <ul className={styles.tags}>
          {logement.tags.map((tag, index) => (
            <li key={index} className={styles.tagItem}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.accordionOpenContainer}>
        <Accordion
          className={styles.accordionLogement}
          title="Description"
          content={logement.description}
        />
        <Accordion
          className={styles.accordionLogement}
          title="Équipements"
          content={logement.equipments.join(', ')}
        />
      </div>
    </div>
  );
}

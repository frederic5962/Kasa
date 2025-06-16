import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './logement.module.scss';
import Accordion from '../../components/accordion/Accordion';

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        const foundLogement = data.find(l => l.id === id);
        setLogement(foundLogement);
      })
      .catch(error => console.error('Erreur de chargement', error));
  }, [id]);

  // Redirection vers la page 404 si le logement n'est pas trouvé
  if (logement === undefined) {
    return <Navigate to="/404" />;
  }

  // Si `logement` est encore en attente de chargement
  if (!logement) {
    return <h2>Chargement...</h2>;
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
      <div className={styles.accordionContainer}>
        <Accordion
          className={styles.descAccordion}
          title="Description"
          content={logement.description}
        />
        <Accordion
          className={styles.equipAccordion}
          title="Équipements"
          content={logement.equipments.join(', ')}
        />
      </div>
    </div>
  );
}

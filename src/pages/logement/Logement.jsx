import { useParams } from 'react-router-dom';
import logementsData from '../../data/logements.json';
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
    <div>
      {/* Carrousel d'images amélioré */}
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
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
    </div>
  );
}

export default Logement;

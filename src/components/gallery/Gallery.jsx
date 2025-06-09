import { useState, useEffect } from 'react';
import styles from './gallery.module.scss';
import { Link } from 'react-router-dom';
import logementsData from '../../../public/data/logements.json';

export default function Gallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/data/logements.json')
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Erreur de chargement', error));
  }, []);

  return (
    <div className={styles.gallery}>
      {logements.map(logement => (
        <Link to={`/logement/${logement.id}`} key={logement.id} className={styles.item}>
          <p className={styles.title}>{logement.title}</p>
        </Link>
      ))}
    </div>
  );
}

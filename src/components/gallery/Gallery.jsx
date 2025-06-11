import { useState, useEffect } from 'react';
import styles from './gallery.module.scss';
import { Link } from 'react-router-dom';


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
          <img src={logement.cover} alt={logement.title} className='{styles.image}' />
          <p className={styles.title}>{logement.title}</p>
        </Link>
      ))}
    </div>
  );
}

import { useParams, Navigate } from 'react-router-dom';
import styles from './logement.module.scss';
import Accordion from '../../components/accordion/Accordion';
import useFetchLogement from '../../hooks/useFetchLogement';
import Carousel from '../../components/carousel/Carousel';
import LogementHeader from '../../components/logementHeader/LogementHeader';


export default function Logement() {
  const { id } = useParams();
  const { logement, loading, notFound } = useFetchLogement(id);

  if (notFound) {
    return <Navigate to="/404" />;
  }

  if (loading || !logement) {
    return <h2>Chargement...</h2>;
  }

  return (
    <div className={styles.logementPage}>
      <Carousel images={logement.pictures} />
      <LogementHeader
        title={logement.title}
        location={logement.location}
        host={logement.host}
        rating={logement.rating}
      />

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

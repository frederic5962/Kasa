import styles from "./gallery.module.scss";
import { Link } from "react-router-dom";
import logementsData from "../../data/logements.json"; 
export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {logementsData.map(logement => (
        <Link to={`/logement/${logement.id}`} key={logement.id} className={styles.item}>
          <p className={styles.title}>{logement.title}</p>
        </Link>
      ))}
    </div>
  );
}

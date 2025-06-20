import styles from './logementHeader.module.scss';

export default function LogementHeader({ title, location, host, rating }) {
  return (
    <div className={styles.logementHeader}>
      <div className={styles.logementInfo}>
        <h1 className={styles.logementTitle}>{title}</h1>
        <p className={styles.location}>{location}</p>
      </div>

      <div className={styles.hostAndRating}>
        <div className={styles.host}>
          <p className={styles.hostName}>{host.name}</p>
          <img
            className={styles.hostPicture}
            src={host.picture}
            alt={`Portrait de ${host.name}`}
          />
        </div>
        <div className={styles.rating}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={rating >= star ? styles.starFilled : styles.starEmpty}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

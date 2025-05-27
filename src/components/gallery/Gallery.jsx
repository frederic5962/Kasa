import styles from './gallery.module.scss';

const blocks = [
  { id: 1, title: 'galerie Rouge' },
  { id: 2, title: 'Carré Dynamique' },
  { id: 3, title: 'Bloc Spécial' },
  { id: 4, title: 'Zone Créative' },
  { id: 5, title: 'Section Design' },
  { id: 6, title: 'Element Final' },
];
export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {blocks.map(block => (
        <a href="#" key={block.id} className={styles.item}>
          <p className={styles.title}>{block.title}</p>
        </a>
      ))}
    </div>
  );
}

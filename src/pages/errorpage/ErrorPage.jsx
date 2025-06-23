import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './errorpage.module.scss';

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000); 

    return () => clearTimeout(timeout); // Nettoyage du timeout pour éviter les erreurs
  }, [navigate]);

  return (
    <main className={styles.errorPage}>
      <div className={styles.errorBox}>
        <h1 className={styles.numberError}>404</h1>
      </div>

      <p className={styles.paragraphError}>Oups ! Cette page n'existe pas.</p>
      <p>Redirection vers l'accueil dans quelques secondes...</p>
      <button className={styles.button} onClick={() => navigate('/')}>
        Retour immédiat
      </button>
    </main>
  );
}

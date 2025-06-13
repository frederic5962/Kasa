import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./errorpage.module.scss";

export default function ErrorPage() {
  const navigate = useNavigate();

   useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 10000); // Redirige vers l'accueil après 3 secondes

    return () => clearTimeout(timeout); // Nettoyage du timeout pour éviter les erreurs
  }, [navigate]); 

  return (
    <main className={styles.errorPage}>
      <h1>404 - Page introuvable</h1>
      <p>Oups ! Cette page n'existe pas.</p>
      <p>Redirection vers l'accueil dans quelques secondes...</p>
      <button className={styles.button} onClick={() => navigate("/")}>Retour immédiat</button>
    </main>
  );
}

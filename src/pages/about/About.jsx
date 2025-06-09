import Banner from '../../components/banner/Banner';
import Accordion from '../../components/accordion/Accordion';
import styles from './about.module.scss';


export default function About() {
  return (
    <section>
      <Banner page="about" />
      <div className={styles.accordionContainer}>
        <Accordion
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale grâce aux évaluations des utilisateurs et aux vérifications régulières."
        />
        <Accordion
          title="Respect"
          content="Chez Kasa, nous valorisons le respect de chacun. La diversité et l’inclusion sont au cœur de notre mission."
        />
        <Accordion
          title="Service"
          content="Notre équipe est disponible 24h/24 et 7j/7 pour répondre à toutes vos questions et vous accompagner dans votre recherche de logement."
        />
        <Accordion
          title="Sécurité"
          content="Votre sécurité est notre priorité. Tous nos logements sont conformes aux normes de sécurité en vigueur."
        />
      </div>
    </section>
  );
}

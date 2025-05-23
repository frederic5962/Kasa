import styles from './footer.module.scss';
import LOGO from '../../assets/logo-footer.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logoF} src={LOGO} alt="Logo Kasa" />
      <p className={styles.paragraph}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

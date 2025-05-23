import styles from "./header.module.scss";
import LOGO from "../../assets/logo-header.svg";
import {NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logoH} src={LOGO} alt="Logo Kasa" />
            <nav className={styles.nav}>
            <NavLink to="/" className={({ isActive}) => isActive ? styles.active : styles.link}>
            Acceuil
            </NavLink>
            <NavLink to="/about" className={({ isActive}) => isActive ? styles.active : styles.link}>
            A propos
            </NavLink>    
            </nav>
        </header>
    );
}
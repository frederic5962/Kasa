import styles from "./banner.module.scss";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <h1 className={styles.bannerTitle}>Chez vous, partout et ailleurs</h1>
        </section>
    );
}


import useBanner from "../../hooks/useBanner";
import styles from "./banner.module.scss";

export default function Banner({ page }) {
  const banner = useBanner(page);

  return (
    banner && (
      <section
        className={styles[banner.className]}
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        {banner.text && <h1 className={styles.bannerTitle}>{banner.text}</h1>}
      </section>
    )
  );
}

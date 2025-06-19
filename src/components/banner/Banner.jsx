import { getBannerByPage } from "../../utils/bannerData";
import styles from "./banner.module.scss";

export default function Banner({ page }) {
  const banner = getBannerByPage(page);

  if (!banner) {
    console.warn(`⚠️ Aucun banner défini pour la page "${page}"`);
    return null;
  }

  return (
    <section
      className={styles[banner.className]}
      style={{ backgroundImage: `url(${banner.image})` }}
    >
      {banner.text && <h1 className={styles.bannerTitle}>{banner.text}</h1>}
    </section>
  );
}

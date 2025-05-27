
import Banner from '../components/banner/Banner';
import Gallery from '../components/gallery/Gallery';
import './Home.module.scss';

export default function Home() {
  return (
    <section className="content">
      <Banner />
      <Gallery />
    </section>
  );
}

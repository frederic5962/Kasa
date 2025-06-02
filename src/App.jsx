import './layouts/App/global.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <main
        className={
          location.pathname === '/'
            ? 'homePage'
            : location.pathname === '/about'
            ? 'aboutPage'
            : 'logementPage'
        }
      >
        <Outlet /> {/* Affiche dynamiquement la bonne page */}
      </main>
      <Footer />
    </>
  );
}

export default App;

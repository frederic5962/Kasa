import './layouts/App/global.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();

  const isErrorPage = location.pathname === "/404"; // Vérifie si on est sur l'erreur

  return (
    <>
      {!isErrorPage && <Header />}
      <main
        className={
          location.pathname === "/"
            ? "homePage"
            : location.pathname === "/about"
            ? "aboutPage"
            : location.pathname.startsWith("/logement")
            ? "logementPage"
            : "errorPage"
        }
      >
        <Outlet />
      </main>
      {!isErrorPage && <Footer />}
    </>
  );
}

export default App;

import "./layouts/App/global.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom"; // Permet d'afficher les pages

function App() {
    return (
        <>    
            <Header />
            <main>
                <Outlet /> {/* Affiche dynamiquement la bonne page */}
            </main>
            <Footer />
        </>
    );
}

export default App;

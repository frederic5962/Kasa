import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Logement from "../pages/logement/Logement"; // Ajout de la page logement

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // `App.jsx` est le layout principal
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> }, // Page d'accueil
            { path: "about", element: <About /> }, // Page "À propos"
            { path: "logement/:id", element: <Logement /> }, // Page logement dynamique
        ],
    },
]);

export default router;

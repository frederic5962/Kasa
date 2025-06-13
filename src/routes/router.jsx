import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Logements from "../pages/logement/Logements";
import ErrorPage from "../pages/errorpage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Gestion des erreurs globales
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "logement/:id", element: <Logements /> },
      { path: "404", element: <ErrorPage /> }, // Ajoute la route pour `/404`
      { path: "*", element: <Navigate to="/404" /> }, // Redirige toute URL inconnue
    ],
  },
]);

export default router;

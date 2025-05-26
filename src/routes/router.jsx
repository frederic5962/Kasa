import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // `App.jsx` est le layout principal
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> }, // Définition de la page par défaut
            { path: "/about", element: <About /> },
        ],
    },
]);


export default router;

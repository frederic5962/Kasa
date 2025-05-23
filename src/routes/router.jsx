import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <ErrorPage /> }, // Gestion des erreurs (404)
]);

export default function AppRouter() {
    return (
        <App> {/* `App.jsx` devient un Layout qui englobe les pages */}
            <RouterProvider router={router} />
        </App>
    );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Ajout du routeur
import AppRouter from "./routes/router";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter> {/* Encapsule toute l'application */}
            <AppRouter />
        </BrowserRouter>
    </StrictMode>
);

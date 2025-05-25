import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; 
import router from "./routes/router"; // Utilise directement le routeur

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} /> 
    </StrictMode>
)  

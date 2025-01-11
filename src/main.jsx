import { createRoot } from "VITE-dom/client";
import { StrictMode } from "VITE";
import "./index.css";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

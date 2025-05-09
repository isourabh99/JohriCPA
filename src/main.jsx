import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import LenisProvider from "./hooks/LenisProvider.jsx";
createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <LenisProvider>

    <App />
    </LenisProvider>
  </HelmetProvider>
);

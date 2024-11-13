import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Enregistre le service worker pour activer le mode hors ligne
serviceWorkerRegistration.register();

// Pour mesurer les performances, passe une fonction (comme `console.log`) à `reportWebVitals`
reportWebVitals(console.log);

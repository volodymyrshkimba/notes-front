import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { NotesProvider } from "./context/NotesProvider.jsx";

import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </StrictMode>
);

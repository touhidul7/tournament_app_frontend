// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AuthWrapper from "./AuthWrapper"; // import the wrapper

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <AuthWrapper />
  // </StrictMode>
);

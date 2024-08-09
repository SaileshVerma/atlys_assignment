import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "./pages/App";
import { RouterProvider } from "./router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

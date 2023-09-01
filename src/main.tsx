import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import ContextProvider from "./utils/context/Context";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
    <Home />
    </ContextProvider>
  </React.StrictMode>,
)

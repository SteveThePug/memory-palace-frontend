import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import { BrowserRouter } from "react-router-dom";

import "./styles.css"; // Importing your stylesheet

import App from "./App.tsx";
import store from "./store/store.ts";

import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Ensure the module is installed and type declarations are available

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="701360193903-2d05m3t2r6fd0oq4am441dpj8am7l0tc.apps.googleusercontent.com">
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
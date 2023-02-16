import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider";
import { Provider } from "react-redux";
import store from "./redux/store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App/>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

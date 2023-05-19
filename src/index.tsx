import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App";
import MainPage from "./app/pages/MainPage/MainPage";
import GamesPage from "./app/pages/GamesPage/GamesPage";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

import MyProjectsPage from "app/pages/MyProjectsPage/MyProjectsPage";
import GamesNav from "components/GamesNav/GamesNav";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="projects" element={<MyProjectsPage />}>
            <Route
              path="serious"
              element={<p style={{ color: "#fff" }}>hellow</p>}
            />
            <Route path="gamesnav/*" element={<GamesNav />} />
          </Route>
        </Route>
        <Route path="/g/*" element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

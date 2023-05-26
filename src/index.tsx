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
import RandomNav from "components/RandomNav/RandomNav";
import RandomPage from "app/pages/RandomPage/RandomPage";

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
            <Route path="random" element={<RandomNav />} />
            <Route path="gamesnav/*" element={<GamesNav />} />
          </Route>
        </Route>
        <Route path="/r/*" element={<RandomPage />} />
        <Route path="/g/*" element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

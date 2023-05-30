import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App";
import MainPage from "./app/pages/MainPage/MainPage";
import GamesPage from "./app/pages/GamesPage/GamesPage";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

import MyProjectsPage from "app/pages/MyProjectsPage/MyProjectsPage";
import RandomPage from "app/pages/RandomPage/RandomPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ScrollToTop />

    <Routes>
      <Route path="/">
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="projects" element={<MyProjectsPage />} />
        </Route>

        <Route path="r/*" element={<RandomPage />} />
        <Route path="g/*" element={<GamesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

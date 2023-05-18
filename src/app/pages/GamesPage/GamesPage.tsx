import { Routes, Route } from "react-router-dom";
import TikTakToe from "projects/TikTakToeGame/TikTakToe/TikTakToe";

const GamesPage = () => {
  return (
    <Routes>
      <Route path="tiktaktoe" element={<TikTakToe />} />
    </Routes>
  );
};

export default GamesPage;

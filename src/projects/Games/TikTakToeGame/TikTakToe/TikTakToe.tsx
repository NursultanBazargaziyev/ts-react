import { FC } from "react";
import Board from "../Board/Board";

import GameBoard from "components/GameBoard/GameBoard";

const Game = () => {
  return <Board />;
};

const TikTakToe: FC = () => {
  return <GameBoard gameComp={<Game />} />;
};

export default TikTakToe;

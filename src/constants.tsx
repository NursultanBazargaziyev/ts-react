import CPPIcon from "components/assets/Icons/CPPIcon";
import JavaScriptIcon from "components/assets/Icons/JavaScriptIcon";
import TypeScriptIcon from "components/assets/Icons/TypeScriptIcon";
import HTMLIcon from "components/assets/Icons/HTMLIcon";
import CSSIcon from "components/assets/Icons/CSSIcon";
import JavaIcon from "components/assets/Icons/JavaIcon";
import ReactIcon from "components/assets/Icons/ReactIcon";

import cube from "videos/cube.webm";
import tictactoe from "videos/tictactoe.webm";

const skillIconWidth = "6rem";
const skillIconHeight = "6rem";

// Not sure if to use
export const MY_SKILL_SET_CPP = [
  {
    component: <CPPIcon width={skillIconWidth} height={skillIconHeight} />,
    text: "CPP icon",
  },
];

export const MY_SKILL_SET_FRONT = [
  {
    component: (
      <JavaScriptIcon width={skillIconWidth} height={skillIconHeight} />
    ),
    text: "JavaScript icon",
  },
  {
    component: (
      <TypeScriptIcon width={skillIconWidth} height={skillIconHeight} />
    ),
    text: "TypeScript icon",
  },
  {
    component: <ReactIcon width={skillIconWidth} height={skillIconHeight} />,
    text: "React icon",
  },
  {
    component: <HTMLIcon width={skillIconWidth} height={skillIconHeight} />,
    text: "HTML icon",
  },
  {
    component: <CSSIcon width={skillIconWidth} height={skillIconHeight} />,
    text: "CSS icon",
  },
];

export const MY_SKILL_SET_BACK = [
  {
    component: <JavaIcon width={skillIconWidth} height={skillIconHeight} />,
    text: "Java icon",
  },
];
//

export const MY_SKILL_SET = [
  {
    component: <CPPIcon width={skillIconWidth} height={skillIconHeight} />,
    text: "CPP icon",
  },
  {
    component: (
      <JavaScriptIcon width={skillIconWidth} height={skillIconHeight} />
    ),
    text: "JavaScript icon",
  },
  {
    component: (
      <TypeScriptIcon width={skillIconWidth} height={skillIconHeight} />
    ),
    text: "TypeScript icon",
  },
  {
    component: <ReactIcon width={skillIconWidth} height={skillIconHeight} />,
    text: "React icon",
  },
  {
    component: <HTMLIcon width={skillIconWidth} height={skillIconHeight} />,
    text: "HTML icon",
  },
  {
    component: <CSSIcon width={skillIconWidth} height={skillIconHeight} />,
    text: "CSS icon",
  },
  {
    component: <JavaIcon width={skillIconWidth} height={skillIconHeight} />,
    text: "Java icon",
  },
];

export const MY_PROJECTS = [
  {
    picture: cube,
    title: "3D Cube",
    description: "Three.JS, JavaScript",
    link: "/r/cube",
  },
  {
    picture: tictactoe,
    title: "Tic Tac Toe",
    description: "JavaScript/TypeScript",
    link: "/g/tiktaktoe",
  },
  {
    picture: "",
    title: "ASCII camera",
    description: "JavaScript",
    link: "/r/asciicamera",
  },
];

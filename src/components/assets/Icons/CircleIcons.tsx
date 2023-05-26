import { FC } from "react";
import { IconType } from "./type";

const CircleIcon: FC<IconType> = ({ width, height }) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />

      <g id="Complete">
        <g id="Circle">
          <circle
            cx="12"
            cy="12"
            fill="none"
            id="Circle-2"
            r="10"
            stroke="#0f0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  );
};

export default CircleIcon;

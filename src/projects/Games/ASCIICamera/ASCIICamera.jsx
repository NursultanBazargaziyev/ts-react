import { useEffect } from "react";

const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let img = new Image();
img.src = "img/dog2.jpg";

const width = 500;
const height = 500;

const ASCIICamera = () => {
  useEffect(() => {
    const canvas = document.getElementById("asciicam");
    const ctx = canvas.getContext("2d");
    console.log(canvas);
  });

  return <canvas id="asciicam"></canvas>;
};

export default ASCIICamera;

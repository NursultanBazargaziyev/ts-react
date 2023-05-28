import React, { useEffect } from "react";
import image from "img/dog3.png";

const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

const ASCIICamera = () => {
  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const fontSize = "16px";

    const canvas = document.getElementById("asciicam");
    const ctx = canvas.getContext("2d");

    const stream = document.getElementById("stream");
    const ctxStream = stream.getContext("2d");

    let img = new Image();
    img.src = image;
    let imgData;

    canvas.width = width;
    canvas.height = height;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalWidth);
      imgData = ctx.getImageData(0, 0, width, height);

      let w = width / img.naturalWidth;
      let h = height / img.naturalHeight;
      stream.width *= w;
      stream.height *= h;

      console.log(w, h);

      for (let i = 0; i < img.naturalWidth; i++) {
        for (let j = 0; j < img.naturalWidth; j++) {
          let position = (width * j + i) * 4;

          let r = imgData.data[position];
          let g = imgData.data[position + 1];
          let b = imgData.data[position + 2];

          let avg = (r + g + b) / 3;

          ctxStream.fillStyle = `rgba(${avg}, ${avg}, ${avg}, 1)`;

          ctxStream.fillRect(i * w, j * h, w, w);
        }
      }

      console.log("end");
    };
  }, []);

  return (
    <>
      <canvas
        style={{ position: "absolute", visibility: "hidden", zIndex: "-1" }}
        id="asciicam"
      ></canvas>
      <canvas style={{}} id="stream"></canvas>
    </>
  );
};

export default ASCIICamera;

// window.onresize = () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   ctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
// };

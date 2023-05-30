import React, { useEffect } from "react";

const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
// $@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'.
const ASCIICamera = () => {
  let stream = null;
  let record = null;
  let ctx;
  let width = 120;
  let height = 72;
  const fontsize = window.innerWidth / width;
  console.log(fontsize);

  const init = async () => {
    record = document.getElementById("recorder");

    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      record.srcObject = stream;
    } catch (e) {
      console.log(e);
    }
  };

  const draw = () => {
    ctx.drawImage(record, 0, 0, width, height);
    const imgData = ctx.getImageData(0, 0, width, height);
    const len = density.length;
    const ratio = 255 / len;

    const parent = document.getElementById("parent");
    let row = "";
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let position = (width * i + j) * 4;

        let r = imgData.data[position];
        let g = imgData.data[position + 1];
        let b = imgData.data[position + 2];

        let avg = (r + g + b) / 3;
        let index = Math.floor(avg / ratio);
        let c = density.charAt(len - 1 - index);
        if (c === " ") {
          row += "&nbsp;";
        } else {
          row += c;
        }
      }
      row += "<br/>";
    }
    parent.innerHTML = row;
    requestAnimationFrame(draw);
  };

  useEffect(() => {
    const canvas = document.getElementById("asciicam");
    ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    init();
    draw();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        background: "#000",
        justifyContent: "center",
      }}
    >
      <canvas
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          visibility: "hidden",
          zIndex: "-1",
        }}
        id="asciicam"
      ></canvas>
      <video
        style={{
          visibility: "hidden",
          position: "absolute",
          width: `${width}px`,
          height: `${height}px`,
          top: "0",
          right: "0",
        }}
        src=""
        id="recorder"
        playsInline
        autoPlay
        muted
      ></video>
      <div
        id="parent"
        style={{
          maxWidth: "100%",
          height: "100%",
          color: "#fff",
          fontFamily: "Courier",
          fontSize: "14pt",
          lineHeight: "10pt",
          color: "#0f0",
        }}
      ></div>
    </div>
  );
};

export default ASCIICamera;

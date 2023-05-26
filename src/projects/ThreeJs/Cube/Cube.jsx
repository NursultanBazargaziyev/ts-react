import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as THREE from "three";

import SceneInit from "./SceneInit";
const Cube = () => {
  const nav = useNavigate();

  window.addEventListener("locationchange", function () {
    console.log("location changed!");
  });
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    test.scene.add(boxMesh);
  });

  return (
    <div>
      <a href="/" style={{ position: "absolute", left: 0, top: 0 }}>
        Clic me
      </a>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
};

export default Cube;

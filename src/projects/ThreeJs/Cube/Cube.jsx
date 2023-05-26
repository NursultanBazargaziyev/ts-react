import { useEffect } from "react";

import * as THREE from "three";

import SceneInit from "./SceneInit";
const Cube = () => {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();
    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    test.scene.add(boxMesh);

    const onWindowResize = () => test.onWindowResize();
    window.addEventListener("resize", onWindowResize, false);

    return () => {
      window.cancelAnimationFrame(test.animationId);
      window.removeEventListener("resize", onWindowResize, false);
    };
  }, []);

  return (
    <div>
      <a
        href="/projects"
        style={{
          fontFamily: "Minecrafita",
          position: "absolute",
          left: "10%",
          top: "10%",
          color: "#0f0",
          fontSize: "1.3rem",
        }}
      >
        Go back
      </a>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
};

export default Cube;

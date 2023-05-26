import {
  Scene,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Effect,
  PostProcess,
  Engine,
} from "@babylonjs/core";
export var createScene = function () {
  const canvas = document.getElementById("terminal");
  const engine = new Engine();
  // This creates a basic Babylon Scene object (non-mesh)
  var scene = new Scene(engine);

  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'sphere' shape.
  var sphere = MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 2, segments: 32 },
    scene
  );

  // Move the sphere upward 1/2 its height
  sphere.position.y = 1;

  // Our built-in 'ground' shape.
  //   var ground = new MeshBuilder.CreateGround(
  //     "ground",
  //     { width: 6, height: 6 },
  //     scene
  //   );

  Effect.ShadersStore["crtFragmentShader"] = `
    #ifdef GL_ES
        precision highp float;
    #endif

    // Samplers
    varying vec2 vUV;
    uniform sampler2D textureSampler;

    // Parameters
    uniform vec2 curvature;

    vec2 curveRemapUV(vec2 uv)
    {
        // as we near the edge of our screen apply greater distortion using a sinusoid.

        uv = uv * 2.0 - 1.0;
		vec2 offset = abs(uv.yx) / vec2(curvature.x, curvature.y);
		uv = uv + uv * offset * offset;
		uv = uv * 0.5 + 0.5;
        return uv;
    }

    void main(void) 
    {
        vec2 remappedUV = curveRemapUV(vec2(vUV.x, vUV.y));
        vec4 baseColor = texture2D(textureSampler, remappedUV);

        if (remappedUV.x < 0.0 || remappedUV.y < 0.0 || remappedUV.x > 1.0 || remappedUV.y > 1.0){
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        } else {
            gl_FragColor = baseColor;
        }
        
    }
    `;

  var postProcess = new PostProcess(
    "CRTShaderPostProcess",
    "crt",
    ["curvature"],
    null,
    1,
    camera
  );
  postProcess.onApply = function (effect) {
    effect.setFloat2("curvature", 3.0, 3.0);
  };

  return scene;
};

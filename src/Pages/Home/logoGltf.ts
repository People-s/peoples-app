import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function initLogo() {
  var renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById("logo")?.appendChild(renderer.domElement);

  document.addEventListener("scroll", animateParticles);

  let scrollY = 0;

  function animateParticles() {
    scrollY = window.scrollY;
  }

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 3;
  scene.add(camera);

  // Objects
  const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

  // Materials

  const sphereMaterial = new THREE.PointsMaterial({
    // transparent: true,
    size: 0.005,
  });

  sphereMaterial.color = new THREE.Color(0xfffffff);

  // Mesh
  const sphere = new THREE.Points(geometry, sphereMaterial);
  // sphere.position.setX(1.4);

  const loader = new GLTFLoader();
  loader.load(
    "peoples.glb",
    function (gltf) {
      // gltf.scene.traverse(function (child) {
      //     if ((child as THREE.Mesh).isMesh) {
      //         const m = (child as THREE.Mesh)
      //         m.receiveShadow = true
      //         m.castShadow = true
      //     }
      //     if (((child as THREE.Light)).isLight) {
      //         const l = (child as THREE.Light)
      //         l.castShadow = true
      //         l.shadow.bias = -.003
      //         l.shadow.mapSize.width = 2048
      //         l.shadow.mapSize.height = 2048
      //     }
      // })
      scene.add(gltf.scene);
      console.log(scene);
    }
    // (xhr) => {
    //     console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    // },
    // (error) => {
    //     console.log(error)
    // }
  );

  // Lights

  window.addEventListener("resize", onWindowResize, false);

  const clock = new THREE.Clock();
  renderer.render(scene, camera);

  function animate() {
    // const elapsedTime = clock.getElapsedTime();

    const group = scene.children[1];
    // if (group) {
    //   group.applyMatrix4(
    //     new THREE.Matrix4().makeTranslation(0, scrollY * 0.001, 0)
    //   );
    // }

    // if (group) {
    //   group.rotation.y = 0.2 * elapsedTime;
    // }
    group.position.y = scrollY * 0.01;

    // Update objects
    console.log("group", group);

    // Render
    renderer.clear();
    renderer.render(scene, camera);
    // if (group) return;

    // Call tick again on the next frame
    requestAnimationFrame(animate);
  }

  animate();

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  }
}

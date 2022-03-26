import * as THREE from "three";

export function initLogo() {
  var renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById("logo")?.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 2;
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

  scene.add(sphere);

  // Lights

  window.addEventListener("resize", onWindowResize, false);

  const clock = new THREE.Clock();
  renderer.render(scene, camera);

  function animate() {
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    sphere.rotation.y = 0.2 * elapsedTime;

    // Render
    renderer.clear();
    renderer.render(scene, camera);

    // Call tick again on the next frame
    requestAnimationFrame(animate);
  }

  // animate();

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  }
}

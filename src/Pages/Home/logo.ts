import { group } from "console";
import * as THREE from "three";

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

  // rotation

  function animateParticles() {
    scrollY = window.scrollY;
  }

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 3;
  scene.add(camera);

  // Objects
  const torusGeometry = new THREE.TorusGeometry(0.4, 0.2, 16, 100);
  const sphereGeometry = new THREE.SphereGeometry(0.2, 30, 16, 4, 6.2, 0, 3.1);
  const cylinderGeometry = new THREE.CylinderGeometry(
    0.2,
    0.2,
    2,
    40,
    40,
    false
  );

  const groups = new THREE.Group();

  // Materials

  const sphereMaterial = new THREE.PointsMaterial({
    // transparent: true,
    size: 0.005,
  });

  sphereMaterial.color = new THREE.Color(0xfffffff);

  // Mesh
  const torus = new THREE.Points(torusGeometry, sphereMaterial);
  const sphere = new THREE.Points(sphereGeometry, sphereMaterial);
  const cylinder = new THREE.Points(cylinderGeometry, sphereMaterial);
  torus.position.setX(0.4);
  torus.position.setY(0.2);
  sphere.position.setY(1.1);
  sphere.position.setX(0.4);
  cylinder.position.setY(-0.8);

  groups.add(torus);
  groups.add(cylinder);
  groups.add(sphere);

  scene.add(groups);

  // Lights

  window.addEventListener("resize", onWindowResize, false);

  const clock = new THREE.Clock();
  renderer.render(scene, camera);

  function animate() {
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    groups.rotation.y = 0.2 * elapsedTime;
    groups.position.y = scrollY * 0.0008;

    // Render
    renderer.clear();
    renderer.render(scene, camera);

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

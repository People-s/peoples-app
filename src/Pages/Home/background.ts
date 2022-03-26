import * as THREE from "three";

export function initBackground() {
  var renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById("background")?.appendChild(renderer.domElement);

  document.addEventListener("scroll", animateParticles);

  // let scrollX = 0;
  let scrollY = 0;

  function animateParticles() {
    scrollY = window.scrollY;
    // scrollX = window.scrollX;
  }

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

  const particleGeometry = new THREE.BufferGeometry();
  const particlesCnt = 5000;

  const posArray = new Float32Array(particlesCnt * 3);

  for (let i = 0; i < particlesCnt * 3; i++) {
    // posArray[i] = Math.random();
    // posArray[i] = Math.random() - 0.5; // center it
    // posArray[i] = (Math.random() - 0.5) * 5; // center it, spread out
    posArray[i] = (Math.random() - 0.5) * 10; // center it, spread out
  }

  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );

  // Materials

  const sphereMaterial = new THREE.PointsMaterial({
    // transparent: true,
    size: 0.005,
  });

  const particlesMaterial = new THREE.PointsMaterial({
    // transparent: true,
    size: 0.005,
    // color: 0x000,
  });
  sphereMaterial.color = new THREE.Color(0xfffffff);

  // Mesh

  const particlesMesh = new THREE.Points(particleGeometry, particlesMaterial);

  scene.add(particlesMesh);

  // Lights

  window.addEventListener("resize", onWindowResize, false);

  renderer.render(scene, camera);

  function animate() {
    // Update objects

    // Update Orbital Controls
    // controls.update()
    // particlesMesh.rotation.x += 0.0;
     particlesMesh.rotation.y -= 0.0004;
     // particlesMesh.rotation.y = scrollY * (elapsedTime * 0.00008);
     // particlesMesh.rotation.x = scrollY * (elapsedTime * 0.00008);
     // particlesMesh.rotation.x = scrollY * (elapsedTime * 0.00005);
     particlesMesh.rotation.x = 0.004;

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
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

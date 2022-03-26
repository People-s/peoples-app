import * as THREE from "three";

export function init() {
  var renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById("canvas")?.appendChild(renderer.domElement);

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
  const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

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
  const sphere = new THREE.Points(geometry, sphereMaterial);
  const particlesMesh = new THREE.Points(particleGeometry, particlesMaterial);

  scene.add(sphere, particlesMesh);

  // Lights

  const pointLight = new THREE.PointLight(0xffffff, 0.1);
  pointLight.position.x = 2;
  pointLight.position.y = 3;
  pointLight.position.z = 4;
  scene.add(pointLight);

  // for (var i = 0; i < 1000; i++) {
  //   var mesh = new THREE.Mesh(geometry, sphereMaterial);
  //   mesh.position
  //     .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
  //     .normalize();
  //   mesh.position.multiplyScalar(90 + Math.random() * 700);
  //   mesh.rotation.set(
  //     Math.random() * 2,
  //     Math.random() * 2,
  //     Math.random() * 2
  //   );
  //   particle.add(mesh);
  // }

  var ambientLight = new THREE.AmbientLight(0x999999);
  scene.add(ambientLight);

  var lights = [];
  lights[0] = new THREE.DirectionalLight(0xffffff, 1);
  lights[0].position.set(1, 0, 0);
  lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);
  lights[1].position.set(0.75, 1, 0.5);
  lights[2] = new THREE.DirectionalLight(0x8200c9, 1);
  lights[2].position.set(-0.75, -1, 0.5);
  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);

  window.addEventListener("resize", onWindowResize, false);

  const clock = new THREE.Clock();
  renderer.render(scene, camera);

  function animate() {
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    sphere.rotation.y = 0.3 * elapsedTime;

    // Update Orbital Controls
    // controls.update()
    // particlesMesh.rotation.x += 0.0;
    // particlesMesh.rotation.y -= 0.004;
    // particlesMesh.rotation.y = scrollY * (elapsedTime * 0.00008);
    // particlesMesh.rotation.x = scrollY * (elapsedTime * 0.00008);
    // particlesMesh.rotation.x = scrollY * (elapsedTime * 0.00005);
    particlesMesh.rotation.x = -scrollY * (elapsedTime * 0.00001);
    console.log("animate");

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
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

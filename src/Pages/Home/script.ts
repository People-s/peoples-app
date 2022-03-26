import * as THREE from "three";

export function init() {
  var renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    circle: THREE.Object3D<THREE.Event>,
    skelet: THREE.Object3D<THREE.Event>,
    particle: THREE.Object3D<THREE.Event>;

  console.log("init");
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById("canvas")?.appendChild(renderer.domElement);
  console.log(
    'document.getElementById("canvas")',
    document.getElementById("canvas")
  );

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 2;
  scene.add(camera);

  circle = new THREE.Object3D();
  skelet = new THREE.Object3D();
  particle = new THREE.Object3D();

  scene.add(circle);
  scene.add(skelet);
  scene.add(particle);

  // Objects
  const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

  // Materials

  const material = new THREE.MeshBasicMaterial();
  material.color = new THREE.Color(0xff0000);

  // Mesh
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Lights

  const pointLight = new THREE.PointLight(0xffffff, 0.1);
  pointLight.position.x = 2;
  pointLight.position.y = 3;
  pointLight.position.z = 4;
  scene.add(pointLight);

  // for (var i = 0; i < 1000; i++) {
  //   var mesh = new THREE.Mesh(geometry, material);
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

  function animate() {
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    sphere.rotation.y = 0.5 * elapsedTime;

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    requestAnimationFrame(animate);

    // console.log("animate");
    // requestAnimationFrame(animate);

    // particle.rotation.x += 0.0;
    // particle.rotation.y -= 0.004;
    // circle.rotation.x -= 0.002;
    // circle.rotation.y -= 0.003;
    // skelet.rotation.x -= 0.001;
    // skelet.rotation.y += 0.002;
    // renderer.clear();

    // renderer.render(scene, camera);
  }

  animate();

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.156.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.156.1/examples/jsm/controls/OrbitControls.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('three-container');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 20, 50);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  const light = new THREE.PointLight(0xffffff, 1.2);
  scene.add(light);

  const planetData = [
    { size: 0.5, dist: 4, color: 0xaaaaaa }, // Mercury
    { size: 1.1, dist: 7, color: 0xe5c97a }, // Venus
    { size: 1.2, dist: 10, color: 0x2266cc }, // Earth
    { size: 0.6, dist: 13, color: 0xff4422 }, // Mars
    { size: 2.4, dist: 20, color: 0xd2b48c }, // Jupiter
    { size: 2.0, dist: 28, color: 0xe0caa7 }, // Saturn
    { size: 1.7, dist: 35, color: 0x66ccff }, // Uranus
    { size: 1.6, dist: 42, color: 0x3366ff }  // Neptune
  ];

  const planets = [];
  planetData.forEach((data) => {
    const geom = new THREE.SphereGeometry(data.size, 32, 32);
    const mat = new THREE.MeshStandardMaterial({ color: data.color });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.x = data.dist;
    scene.add(mesh);
    planets.push({ mesh, dist: data.dist });
  });

  function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0001;
    planets.forEach((p, i) => {
      p.mesh.rotation.y += 0.02;
      p.mesh.position.x = p.dist * Math.cos(time * (i + 1));
      p.mesh.position.z = p.dist * Math.sin(time * (i + 1));
    });
    controls.update();
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  animate();
});

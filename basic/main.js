import * as THREE from "three";

// create a scene
const scene = new THREE.Scene();

scene.background = new THREE.Color("#f0f0f0");

// add the camera

const camera = new THREE.PerspectiveCamera( // fov,aspect ratio,near plane,far plane
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

// create and add a cube object

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: "#468585",
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// add lighting

const light = new THREE.DirectionalLight(0xffffff, 10);
light.position.set(1, 1, 1);

scene.add(light);

// set up the renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// animate the scene

renderer.render(scene, camera);

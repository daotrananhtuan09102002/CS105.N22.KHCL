import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { loadMesh, loadMeshRing } from './load_texture.js';


// renderer setup
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// responsive window
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);

const axesHelper = new THREE.AxesHelper(50);

const controls = new OrbitControls(camera, renderer.domElement);

//const gridHelper = new THREE.GridHelper(5, 5);

// create background
const galaxy = "../img/starry-night-sky1.jpg";

const cubeTextureLoader = new THREE.CubeTextureLoader();
const cubeTexture = cubeTextureLoader.load([galaxy, galaxy, galaxy, 
    galaxy, galaxy, galaxy]);

scene.background = cubeTexture;


// add scene objects
scene.add(axesHelper);
const sunMesh = loadMesh(0, 0, 0, 5, '../asset/sunTexture.jpeg');
const mercuryMesh = loadMesh(10, 0, 0, 1, '../asset/mercuryTexture.jpeg');
const venusMesh = loadMesh(15, 0, 0, 1, '../asset/venusTexture.jpeg');
const earthMesh = loadMesh(20, 0, 0, 1, '../asset/earthTexture.jpeg');
const marsMesh = loadMesh(25, 0, 0, 1, '../asset/marsTexture.jpeg');
const jupiterMesh = loadMesh(30, 0, 0, 1, '../asset/jupiterTexture.jpeg');
const saturnMesh = loadMesh(35, 0, 0, 1, '../asset/saturnTexture.jpeg');
const uranusMesh = loadMesh(40, 0, 0, 1, '../asset/uranusTexture.jpeg');
const neptuneMesh = loadMesh(45, 0, 0, 1, '../asset/neptuneTexture.jpeg');
const plutoMesh = loadMesh(50, 0, 0, 1, '../asset/plutoTexture.jpeg');
const saturnRingMesh = loadMeshRing(35, 0, 0, 3, '../asset/saturnRingsTexture.jpeg');
//const saturnRingMesh = loadMeshRing(35, 0, 0, 1, '../asset/saturn-rings-top.png');

scene.add(mercuryMesh);
scene.add(earthMesh);
scene.add(sunMesh);
scene.add(venusMesh);
scene.add(marsMesh);
scene.add(jupiterMesh);
scene.add(saturnMesh);
scene.add(saturnRingMesh);
scene.add(uranusMesh);
scene.add(neptuneMesh);
scene.add(plutoMesh);

camera.position.set(2, 2, 10);
controls.update();



function animate() {

    sunMesh.rotation.y += 0.01;
    mercuryMesh.rotation.y += 0.01;
    earthMesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
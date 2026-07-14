import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mx_bilerp_0 } from "three/src/nodes/materialx/lib/mx_noise.js";


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

const loader = new THREE.TextureLoader()

const texture1 = loader.load('./src/assets/Denji1.jpg')
texture1.colorSpace = THREE.SRGBColorSpace

const texture2 = loader.load("./src/assets/Denji2.jpg")
texture2.colorSpace = THREE.SRGBColorSpace

const texture3 = loader.load("./src/assets/Denji3.jpg")
texture3.colorSpace = THREE.SRGBColorSpace


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshBasicMaterial({ map: texture1 })
const material2 = new THREE.MeshBasicMaterial({ map: texture2 })
const material3 = new THREE.MeshBasicMaterial({ map: texture3 })

const cube1 = new THREE.Mesh(geometry, material1)
const cube2 = new THREE.Mesh(geometry, material2)
const cube3 = new THREE.Mesh(geometry, material3)
cube1.position.x = -3
cube2.position.x = 0
cube3.position.x = 3


scene.add(cube1, cube2, cube3)

camera.position.z = 5

function animate() {

  const cubes = [cube1, cube2, cube3]

  for (const i of cubes) {
    i.rotation.x += 0.01
    i.rotation.y += 0.01
    i.rotation.z += 0.01
  }

  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

import './style/main.styl'
import * as THREE from 'three'
import Particles from './javascript/Particles.js'
import Pot from './javascript/Pot.js'
import Zeus from './javascript/Zeus.js'
import Woman from './javascript/Woman.js'
// import Castle from './javascript/Castle.js'
import { TweenLite } from 'gsap/all'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import sandColorSource from '../static/models/sand/sand_color.jpg'
import sandNormalSource from '../static/models/sand/sand_normal.jpg'


/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const sandColorTexture = textureLoader.load(sandColorSource)
const sandNormalTexture = textureLoader.load(sandNormalSource)
sandColorTexture.repeat.x = 2
sandColorTexture.repeat.y = 2
sandColorTexture.wrapS = THREE.RepeatWrapping
sandColorTexture.wrapT = THREE.RepeatWrapping

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})

/**
 * Scene
 */
const scene = new THREE.Scene()

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
// directionalLight.position.x = 5
// directionalLight.position.y = 5
// directionalLight.position.z = 5
// scene.add(directionalLight)

//Cubes
const particles = new Particles()
scene.add(particles.group)

// Objects

const raycaster = new THREE.Raycaster()

//Pot
const pot = new Pot()
scene.add(pot.group)

//Zeus
const zeus = new Zeus()
scene.add(zeus.group)

//Woman
const woman = new Woman()
scene.add(woman.group)

// //Castle
// const castle = new Castle()
// scene.add(castle.group)


//sand
const sand = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 80, 1, 1),
    new THREE.MeshStandardMaterial({ 
        color: 0x0056ff,
        map: sandColorTexture,
        normalMap: sandNormalTexture 
    })
)
sand.rotation.x = -Math.PI/2
sand.position.y =  -1.25
scene.add(sand)

//walls
const waterWalls = new THREE.Group()

const backWall = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 40, 1, 80),
    new THREE.MeshStandardMaterial({
        color: 0x181e47,
        side: THREE.DoubleSide
    })
)
backWall.position.x = -50
backWall.position.y = 18
backWall.rotation.y = Math.PI/2


const frontWall = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 40, 1, 80),
    new THREE.MeshStandardMaterial({
        color: 0x181e47,
        side: THREE.DoubleSide
    })
)
frontWall.position.x = 50
frontWall.position.y = 18
frontWall.rotation.y = Math.PI/2

const leftWall = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 40, 1, 80),
    new THREE.MeshStandardMaterial({
        color: 0x181e47,
        side: THREE.DoubleSide
    })
)
leftWall.position.z = -40
leftWall.position.y = 18

const rightWall = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 40, 1, 80),
    new THREE.MeshStandardMaterial({
        color: 0x181e47,
        side: THREE.DoubleSide
    })
)
rightWall.position.z = 40
rightWall.position.y = 18


const topWall = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 80, 1, 1),
    new THREE.MeshStandardMaterial({ 
        color: 0x0056ff,
        side: THREE.DoubleSide
    })
)
topWall.rotation.x = -Math.PI/2
topWall.position.y =  38

waterWalls.add(topWall)
waterWalls.add(frontWall)
waterWalls.add(rightWall)
waterWalls.add(leftWall)
waterWalls.add(backWall)
scene.add(waterWalls)


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = -20
camera.position.x = -20


scene.add(camera)

//fog
scene.fog = new THREE.FogExp2(0x181e47,0.02)
scene.add(scene.fog)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearAlpha(0)
document.body.appendChild(renderer.domElement)

/**
 * Camera Controls
 */
const cameraControls = new OrbitControls( camera, renderer.domElement )

cameraControls.lookSpeed = 0.01

/**
 * Resize
 */
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

// document.addEventListener('click', () =>
// {
//     if(hoverDuck)
//     {
//         console.log('click sur le canard')

//         TweenLite.to(
//             duck.duck.position,
//             1,
//             {
//                 y: duck.duck.position.y - 1,
//                 x: duck.duck.position.x - 1,
//                 ease: 'Power3.easeInOut'
//             }
//         )
//     }
// })

/**
 * Loop
 */
//let hoverDuck = false
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Camera
    cameraControls.update(0.11)
    // Cursor raycasting
    const raycasterCursor = new THREE.Vector2(cursor.x * 2, - cursor.y * 2)
    raycaster.setFromCamera(raycasterCursor, camera)

    // const intersects = raycaster.intersectObject(duck.group, true)
    // if(intersects.length)
    // {
    //     hoverDuck = true
    // }
    // else
    // {
    //     hoverDuck = false
    // }
    // console.log(camera.position)
    // Update particles

    // updateParticles()
    

    // Render
    renderer.render(scene, camera)
    

}

loop()
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Hermaphro
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/artPoints/Hermaphro.glb',
            (_gltf) =>
            {
                this.hermaphro = _gltf.scene
                this.group.add(this.hermaphro)
                this.hermaphro.scale.set(5,5,5)
                this.hermaphro.position.y = -2
                this.hermaphro.position.z = -10
                this.hermaphro.position.x = 30
                this.hermaphro.name = "hermaphroObject"
            }
        )
    }
}
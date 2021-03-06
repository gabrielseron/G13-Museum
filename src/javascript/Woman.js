import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Woman
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/artPoints/Woman.glb',
            (_gltf) =>
            {
                this.woman = _gltf.scene
                this.group.add(this.woman)
                this.woman.position.z = 20
                this.woman.position.y = -1
                this.woman.rotation.z = -Math.PI/12
                this.woman.rotation.y = -Math.PI
            }
        )
    }
}
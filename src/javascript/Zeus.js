import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Zeus
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/artPoints/Zeus.glb',
            (_gltf) =>
            {
                this.zeus = _gltf.scene
                this.group.add(this.zeus)
                this.zeus.scale.set(3,3,3)
                this.zeus.position.y = -16
                this.zeus.position.z = -20
                this.zeus.position.x = -70
                this.zeus.rotation.y = Math.PI/2
                this.zeus.rotation.x = Math.PI/6
                this.zeus.name = "zeusObject"

            }
        )
    }
}
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Pot
{
    constructor()
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/artPoints/Pot.glb',
            (_gltf) =>
            {
                this.pot = _gltf.scene
                this.group.add(this.pot)
                this.pot.scale.set(4,4,4)
                this.pot.position.x = -48
                this.pot.position.z = -4
                this.pot.position.y = -38
                this.pot.rotation.x = -1
                this.pot.rotation.y = 0.3
            }
        )
    }
}
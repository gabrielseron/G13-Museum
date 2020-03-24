import * as THREE from 'three'

class Particles
{
    constructor()
    {
        this.group = new THREE.Group()

        const particlesGeometry = new THREE.SphereGeometry(0.01, 0.01, 0.01)
        const particlesMaterial = new THREE.MeshNormalMaterial()

        for(let i = 0; i < 1000; i++)
        {
            const particlesMesh = new THREE.Mesh(particlesGeometry, particlesMaterial)
            particlesMesh.position.x = Math.random() * 20 - 10
            particlesMesh.position.y = Math.random() * 20 - 10
            particlesMesh.position.z = Math.random() * 20 - 10

            this.group.add(particlesMesh)
        }
    }
}

export default Particles
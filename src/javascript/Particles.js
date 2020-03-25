import * as THREE from 'three'

class Particles
{
    constructor()
    {
        this.group = new THREE.Group()

        const particlesGeometry = new THREE.SphereGeometry(0.01, 0.01, 0.01)
        const particlesMaterial = new THREE.PointsMaterial()

        for(let i = 0; i < 10000; i++)
        {
            const particlesMesh = new THREE.Mesh(particlesGeometry, particlesMaterial)
            particlesMesh.position.x = Math.random() * 120 - 60
            particlesMesh.position.y = Math.random() * 10 + 2
            particlesMesh.position.z = Math.random() * 120 - 60

            this.group.add(particlesMesh)
        }
    }
}

export default Particles

            // particlesMesh.position.x = Math.random() * 120 - 60
            // particlesMesh.position.y = Math.random() * 10
            // particlesMesh.position.z = Math.random() * 120 - 60

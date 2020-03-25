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

function updateParticles(){
    this.Particles.forEach(bubbles => {
        const particlesPosition = Date.now() * 0.0003 + Math.PI * 2 / 3
        bubbles.position.x = Math.cos(particlesPosition) * 5
        bubbles.position.z = Math.sin(particlesPosition) * 5
        bubbles.position.y = Math.sin(Date.now() * 0.0012)
    })
}

console.log(updateParticles)
export default Particles
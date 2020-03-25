import * as THREE from 'three'

class Particles
{
    constructor()
    {
        this.group = new THREE.Group()

        const particlesGeometry = new THREE.SphereGeometry(0.01, 0.01, 0.01)
        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x203861
        })

        for(let i = 0; i < 10000; i++)
        {
            const particlesMesh = new THREE.Mesh(particlesGeometry, particlesMaterial)
            particlesMesh.position.x = Math.random() * 120 - 60
            particlesMesh.position.y = Math.random() * 10 + 2
            particlesMesh.position.z = Math.random() * 120 - 60

            this.group.add(particlesMesh)
        }

    }
    updateParticles(){
            this.group.children.forEach(bubble => {
            const particlesPosition = Date.now() * 0.00001
            // bubble.position.x += Math.cos(particlesPosition) * 5
            // bubble.position.z += Math.random(Math.sin(particlesPosition) * 0.5)
            this.group.rotation.y = particlesPosition
        })
    }
}


export default Particles
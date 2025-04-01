<!-- Earth.vue -->
<template>
  <div 
    class="earth-canvas"
    :class="{ 'small': small }"
    ref="earthContainer"
  ></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'

export default defineComponent({
  name: 'Earth',
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const earthContainer = ref<HTMLElement | null>(null)
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    let earth: THREE.Mesh
    let rays: THREE.Line[] = []
    let earthAnimationComplete = false
    let earthAnimationStartTime = 0
    let animationFrameId: number

    const initThree = () => {
      if (!earthContainer.value) return

      // Scene setup
      scene = new THREE.Scene()
      
      // Camera
      const width = earthContainer.value.clientWidth
      const height = earthContainer.value.clientHeight
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
      camera.position.z = 2.5
      
      // Renderer
      renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
      })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio)
      
      // Clear container and append renderer
      while (earthContainer.value.firstChild) {
        earthContainer.value.removeChild(earthContainer.value.firstChild)
      }
      earthContainer.value.appendChild(renderer.domElement)
      
      // Load Earth texture
      const textureLoader = new THREE.TextureLoader()
      const texture = textureLoader.load('/textures/earthmap1k.jpg')
      
      // Create Earth
      const geometry = new THREE.SphereGeometry(1, 32, 32)
      const material = new THREE.MeshBasicMaterial({
        map: texture
      })
      earth = new THREE.Mesh(geometry, material)
      scene.add(earth)
      
      // Start animation
      animate()
    }
    
    const createRays = () => {
      // Clear any existing rays
      rays.forEach(ray => {
        if (ray.geometry) ray.geometry.dispose()
        if (ray.material) {
          if (Array.isArray(ray.material)) {
            ray.material.forEach(m => m.dispose())
          } else {
            ray.material.dispose()
          }
        }
        scene.remove(ray)
      })
      rays.length = 0
      
      // Create rays coming from the center of the Earth
      const numRays = 24
      // Make rays even longer to reach the edges of the container
      const rayLength = props.small ? 8.0 : 12.0
      
      // Ray colors (bright and visible)
      const rayColors = [
        0xffff00, // Yellow
        0xffffff, // White
        0xffdd00, // Gold
      ]
      
      // Create rays in evenly spaced directions
      for (let i = 0; i < numRays; i++) {
        // Calculate angle for this ray
        const angle = (i / numRays) * Math.PI * 2
        
        // Direction vector from center
        const dirX = Math.cos(angle)
        const dirY = Math.sin(angle)
        
        // Create line points - start at center (0,0,0) and extend outward
        const points = []
        points.push(new THREE.Vector3(0, 0, 0)) // Center of Earth
        points.push(new THREE.Vector3(dirX * rayLength, dirY * rayLength, 0)) // Extending outward
        
        // Create line with random bright color
        const colorIndex = Math.floor(Math.random() * rayColors.length)
        const rayMaterial = new THREE.LineBasicMaterial({
          color: rayColors[colorIndex],
          linewidth: 3, // Thicker lines (note: WebGL has limitations on line width)
          transparent: true,
          opacity: 0.9 // Higher opacity for better visibility
        })
        
        // Create the ray
        const rayGeometry = new THREE.BufferGeometry().setFromPoints(points)
        const ray = new THREE.Line(rayGeometry, rayMaterial)
        
        scene.add(ray)
        rays.push(ray)
      }
    }
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      
      const currentTime = Date.now()
      const animationElapsedTime = currentTime - earthAnimationStartTime
      
      // Check if Earth animation is complete (3 seconds)
      const animationDuration = 3000
      
      if (!earthAnimationComplete && animationElapsedTime >= animationDuration) {
        // Earth animation just completed, create rays now
        earthAnimationComplete = true
        createRays()
      }
      
      // Rotate Earth
      if (earth) {
        earth.rotation.y += 0.002
      }
      
      // Animate rays
      if (earthAnimationComplete) {
        rays.forEach((ray, index) => {
          // Pulse effect for rays
          const time = currentTime * 0.001
          const pulse = Math.sin(time * 0.3 + index * 0.2) * 0.3 + 0.7 // Value between 0.4 and 1.0
          
          if (ray.material) {
            if (Array.isArray(ray.material)) {
              ray.material.forEach(m => {
                if ('opacity' in m) {
                  (m as THREE.Material & { opacity: number }).opacity = pulse;
                }
              })
            } else if ('opacity' in ray.material) {
              (ray.material as THREE.Material & { opacity: number }).opacity = pulse;
            }
          }
        })
      }
      
      renderer.render(scene, camera)
    }
    
    const handleResize = () => {
      if (!earthContainer.value || !camera || !renderer) return
      
      const width = earthContainer.value.clientWidth
      const height = earthContainer.value.clientHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      
      renderer.setSize(width, height)
    }
    
    watch(() => props.small, () => {
      // Handle size changes
      earthAnimationStartTime = Date.now()
      earthAnimationComplete = false
      initThree()
    })
    
    onMounted(() => {
      earthAnimationStartTime = Date.now()
      earthAnimationComplete = false
      initThree()
      window.addEventListener('resize', handleResize)
    })
    
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      
      // Clean up Three.js resources
      if (earth?.geometry) earth.geometry.dispose()
      if (earth?.material) {
        if (Array.isArray(earth.material)) {
          earth.material.forEach(m => m.dispose())
        } else {
          earth.material.dispose()
        }
      }
      
      // Clean up rays
      rays.forEach(ray => {
        if (ray.geometry) ray.geometry.dispose()
        if (ray.material) {
          if (Array.isArray(ray.material)) {
            ray.material.forEach(m => m.dispose())
          } else {
            ray.material.dispose()
          }
        }
        scene.remove(ray)
      })
      rays.length = 0
      
      if (renderer) renderer.dispose()
    })
    
    return {
      earthContainer
    }
  }
})
</script>

<style scoped>
.earth-canvas {
  width: 150px;
  height: 150px;
}

.earth-canvas.small {
  width: 40px;
  height: 40px;
}

@media (min-width: 768px) {
  .earth-canvas {
    width: 200px;
    height: 200px;
  }
  
  .earth-canvas.small {
    width: 50px;
    height: 50px;
  }
}
</style>
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
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      
      // Rotate Earth
      if (earth) {
        earth.rotation.y += 0.005
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
      initThree()
    })
    
    onMounted(() => {
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
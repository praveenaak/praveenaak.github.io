//Earth.vue
<template>
    <div ref="container" class="earth-canvas" :class="{ 'small': small }"></div>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as THREE from 'three';
  
export default defineComponent({
    name: 'Earth',
    props: {
      small: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const container = ref<HTMLElement | null>(null);
      let scene: THREE.Scene;
      let camera: THREE.PerspectiveCamera;
      let renderer: THREE.WebGLRenderer;
      let earth: THREE.Mesh;
      let animationFrameId: number;
  
      const initThree = () => {
        if (!container.value) return;
  
        scene = new THREE.Scene();
        scene.background = null;
        
        camera = new THREE.PerspectiveCamera(
          75,
          1,
          0.1,
          1000
        );
  
        renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true,
          preserveDrawingBuffer: true
        });
        
        // Set size based on prop
        const size = props.small ? 30 : 200;
        renderer.setSize(size, size);
        renderer.setClearColor(0x000000, 0);
        container.value.appendChild(renderer.domElement);
  
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const textureLoader = new THREE.TextureLoader();
        
        const texture = textureLoader.load('textures/earthmap1k.jpg', () => {
          if (renderer && scene && camera) {
            renderer.render(scene, camera);
          }
        });
  
        const material = new THREE.MeshPhongMaterial({
          map: texture,
          bumpMap: texture,
          bumpScale: 0.1,
          shininess: 15, 
        });
  
        earth = new THREE.Mesh(geometry, material);
        scene.add(earth);
  
        const ambientLight = new THREE.AmbientLight(0xffffff, 3.0);  
        scene.add(ambientLight);
  
        const pointLight1 = new THREE.PointLight(0xffffff, 1.2);
        pointLight1.position.set(5, 3, 5);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 0.8);
        pointLight2.position.set(-5, -3, 2);
        scene.add(pointLight2);
  
        camera.position.z = 2.5;
        
        renderer.render(scene, camera);
      };
  
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
  
        if (earth) {
          earth.rotation.y += 0.005;
        }
  
        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };
  
      onMounted(() => {
        initThree();
        animate();
      });
  
      watch(() => props.small, (newValue) => {
        if (renderer && container.value) {
          const size = newValue ? 30 : 200;
          renderer.setSize(size, size);
        }
      });
  
      onBeforeUnmount(() => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      });
  
      return {
        container
      };
    }
});
</script>
  
<style scoped>
.earth-canvas {
    width: 200px;
    height: 200px;
    position: relative;
    transition: all 0.5s ease;
}

.earth-canvas.small {
    width: 50px;
    height: 50px;
}
  
.earth-canvas canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
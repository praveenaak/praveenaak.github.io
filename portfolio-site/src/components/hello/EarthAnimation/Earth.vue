<template>
  <div ref="container" class="earth-canvas"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

export default defineComponent({
  name: 'Earth',
  setup() {
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
      
      renderer.setSize(200, 200);
      renderer.setClearColor(0x000000, 0);
      container.value.appendChild(renderer.domElement);

      const geometry = new THREE.SphereGeometry(1, 128, 128); // Increased segments significantly
      const textureLoader = new THREE.TextureLoader();
      
      const texture = textureLoader.load('textures/earthmap1k.jpg', () => {
        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      });

      // Enhanced texture settings
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });

      earth = new THREE.Mesh(geometry, material);
      scene.add(earth);

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
}

.earth-canvas canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
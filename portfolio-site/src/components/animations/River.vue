<!-- River.vue -->
<template>
  <div class="river-container">
    <div class="river-origin"></div>
    <div class="river-image">
      <img src="/textures/CarsonREM-3.png" alt="River animation texture" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'River',
  // No props needed
  setup() {
    const river = ref<HTMLElement | null>(null);
    
    // Get position for animation
    onMounted(() => {
      setTimeout(() => {
        const container = document.querySelector('.river-container');
        if (container) {
          container.classList.add('fade-in');
        }
      }, 100);
    });
    
    return {
      river
    };
  }
})
</script>

<style scoped>
.river-container {
  width: 100%;
  overflow: visible;
  position: relative;
  opacity: 0;
  transition: opacity 1s ease;
  perspective: 1000px;
  transform-style: preserve-3d;
  z-index: 1;
  margin-top: 5rem;
}

.river-container.fade-in {
  opacity: 1;
}

/* Create a circular origin point for the river */
.river-origin {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(46, 139, 87, 0.1); /* Misty Pine with transparency */
  box-shadow: 0 0 15px 5px rgba(46, 139, 87, 0.2);
  top: -20px;
  right: calc(35% + 10px); /* Position it where the "source" of the river would be */
  z-index: 3;
  animation: pulse 2s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.3);
    opacity: 0.8;
  }
}

.river-image {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-end; /* Align to the right */
}

.river-image img {
  width: 70%;
  height: auto;
  max-width: 1200px;
  animation: riverFlow 30s linear infinite;
  transform-origin: right center; /* The flow emanates from right side */
  animation-delay: 0.5s; /* Start after the fade-in */
  border-top-left-radius: 60%; /* Round the left edge */
  border-bottom-left-radius: 30%;
  filter: drop-shadow(0 0 20px rgba(46, 139, 87, 0.2));
}

@keyframes riverFlow {
  0% {
    transform: translateX(0) scaleX(1.01);
  }
  50% {
    transform: translateX(-3%) scaleX(0.99);
  }
  100% {
    transform: translateX(0) scaleX(1.01);
  }
}

@media (min-width: 768px) {
  .river-container {
    margin-top: 8rem;
  }
  
  .river-origin {
    width: 60px;
    height: 60px;
    right: calc(30% + 20px);
    top: -30px;
  }
}

@media (max-width: 767px) {
  .river-image img {
    width: 85%;
  }
  
  .river-origin {
    right: calc(40% + 10px);
  }
}
</style>
// River.vue
<template>
  <div class="river-container">
    <div class="river-segments">
      <div class="river-segment">
        <img src="/textures/CarsonREM-3.png" alt="River" class="river-image" />
      </div>
      <div class="info-button-container">
        <button 
          @click="toggleInfo"
          class="info-button"
          aria-label="Show information"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </button>

        <!-- Info Popup -->
        <Transition name="fade">
          <div v-if="isInfoVisible" class="info-popup">
            <button class="close-button" @click="toggleInfo" aria-label="Close">×</button>
            <h2 class="popup-title">About this Image</h2>
            <p class="popup-text">
              Relative Elevation Model (REM) of the Carson River, NV. Inspired by 
              <a 
                href="https://dancoecarto.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Dan Coe
              </a>
              's work.
            </p>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'River',
  setup() {
    const isInfoVisible = ref(false);

    const toggleInfo = () => {
      isInfoVisible.value = !isInfoVisible.value;
    };

    return {
      isInfoVisible,
      toggleInfo
    };
  }
});
</script>

<style scoped>
.river-container {
  width: 100%;
  position: relative;
  margin-top: -6rem;
}

.river-segments {
  position: relative;
  width: 100%;
  min-height: 200px;
}

.river-segment {
  position: absolute;
  width: 100%;
  height: auto;
  opacity: 0;
  animation: fadeInSegment 0.2s ease forwards;
}

.river-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  transform: rotate(10deg);
  transform-origin: center center;
}

.info-button-container {
  position: absolute;
  left: 5rem;
  top: 120%;
  transform: translateY(-50%);
  z-index: 100;
}

.info-button {
  background: white;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 100%;
  cursor: pointer;
  padding: 0.5rem;
  color: #dc1a1a;
  opacity: 0.9;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.info-button:hover {
  opacity: 1;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.info-popup {
  position: absolute;
  left: calc(100% + 1rem);
  top: 50%;
  transform: translateY(-50%);
  background-color: #000;
  color: #fff;
  padding: 1.5rem;
  border: 2px solid #fff;
  width: 280px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  image-rendering: pixelated;
  font-family: 'VT323', monospace;
}

.close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
  color: #fff;
}

.popup-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
}

.popup-text {
  line-height: 1.4;
  font-size: 1rem;
}

.popup-text a {
  color: #fff;
  text-decoration: none;
  border-bottom: 2px solid #fff;
}

.popup-text a:hover {
  border-bottom-style: dashed;
}

@keyframes fadeInSegment {
  0% {
    opacity: 0;
    transform: scaleY(0.9);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
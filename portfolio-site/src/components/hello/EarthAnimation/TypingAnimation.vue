<template>
  <div class="typing-container">
    <div class="text-earth-container">
      <div class="pixel-text">
        <span ref="typingElement"></span>
      </div>
      <div v-if="showEarth" class="earth-container fade-scale-in">
        <Earth />
      </div>
    </div>
    <River v-if="showRiver" @toggleInfo="isInfoOpen = true" />
    
    <!-- Info Modal -->
    <div v-if="isInfoOpen" class="modal-overlay" @click="isInfoOpen = false">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="isInfoOpen = false" aria-label="Close">×</button>
        <h2 class="modal-title">About this image</h2>
        <p class="modal-text">
          Relative Elevation Model of the Carson River. Inspired by 
        <a 
          href="https://dancoecarto.com/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Dan Coe
        </a>
        ’s work.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Typed from 'typed.js';
import Earth from './Earth.vue';
import River from './River.vue';

export default defineComponent({
  name: 'TypingAnimation',
  components: {
    Earth,
    River
  },
  setup() {
    const typingElement = ref<HTMLElement | null>(null);
    const showEarth = ref(false);
    const showRiver = ref(false);
    const isInfoOpen = ref(false);

    onMounted(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
      document.head.appendChild(link);

      if (typingElement.value) {
        const typed = new Typed(typingElement.value, {
          strings: ['hello world!', 'hello ^1000'],
          typeSpeed: 80,
          backSpeed: 50,
          showCursor: true,
          cursorChar: '|',
          smartBackspace: true,
          startDelay: 300,
          backDelay: 500,
          onStringTyped: (arrayPos) => {
            if (arrayPos === 1) {
              showEarth.value = true;
              document.querySelector('.typed-cursor')?.remove();
              setTimeout(() => {
                showRiver.value = true;
              }, 10);
            }
          }
        });
      }
    });

    return {
      typingElement,
      showEarth,
      showRiver,
      isInfoOpen
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.typing-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding-top: 1rem; 
  min-height: 400px; 
}

.text-earth-container {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-left: 2rem;
  margin-top: 2rem; 
  padding-top: 1rem; 
  height: 200px;
}

.pixel-text {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  color: #000000;
}

.earth-container {
  position: absolute;
  left: 40px; 
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  opacity: 0;
}

.fade-scale-in {
  animation: fadeScaleIn 2s ease forwards;
}

@keyframes fadeScaleIn {
  0% {
    opacity: 0;
    transform: translateY(-50%) scale(0.1);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
}

.modal-overlay {
  position: fixed;
  right: calc(2rem + 40px); 
  top: 220px; 
  background: none;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 999;
}

.modal-content {
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border: 2px solid #fff;
  max-width: 300px;
  width: 100%;
  position: relative;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  image-rendering: pixelated;
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

.modal-title {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
  color: #fff;
}

.modal-text {
  font-family: 'VT323', monospace;
  line-height: 1.4;
  color: #fff;
  font-size: 1rem;
}

.modal-text a {
  color: #fff;
  text-decoration: none;
  border-bottom: 2px solid #fff;
}

.modal-text a:hover {
  border-bottom-style: dashed;
}

:deep(.typed-cursor) {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  opacity: 1;
  margin-left: 2px;
  animation: none !important;
  color: #000;
}

:deep(.typed-fade-out) {
  opacity: 1 !important;
}

/* Add fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
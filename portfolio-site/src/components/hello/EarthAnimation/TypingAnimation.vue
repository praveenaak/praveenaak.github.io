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
    <div v-if="showRiver" class="river-segments">
      <div v-for="i in 10" :key="i" class="river-segment" :class="`segment-${i}`">
        <img src="/textures/CarsonREM-3.png" alt="River" class="river-image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Typed from 'typed.js';
import Earth from './Earth.vue';

export default defineComponent({
  name: 'TypingAnimation',
  components: {
    Earth
  },
  setup() {
    const typingElement = ref<HTMLElement | null>(null);
    const showEarth = ref(false);
    const showRiver = ref(false);

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
      showRiver
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
  padding: 2rem 0;
  min-height: 600px;
}

.text-earth-container {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-left: 2rem;
  margin-top: 4rem;
  padding-top: 2rem;
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

.river-segments {
  position: relative;
  width: 100%;
  margin-top: -20rem;
}

.river-segment {
  position: absolute;
  width: 100%;
  height: auto;
  opacity: 0;
}

.river-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.segment-1 { clip-path: inset(0 90% 0 0); animation: fadeInSegment 0.2s ease forwards; }
.segment-2 { clip-path: inset(0 80% 0 10%); animation: fadeInSegment 0.2s ease forwards 0.1s; }
.segment-3 { clip-path: inset(0 70% 0 20%); animation: fadeInSegment 0.2s ease forwards 0.2s; }
.segment-4 { clip-path: inset(0 60% 0 30%); animation: fadeInSegment 0.2s ease forwards 0.3s; }
.segment-5 { clip-path: inset(0 50% 0 40%); animation: fadeInSegment 0.2s ease forwards 0.4s; }
.segment-6 { clip-path: inset(0 40% 0 50%); animation: fadeInSegment 0.2s ease forwards 0.5s; }
.segment-7 { clip-path: inset(0 30% 0 60%); animation: fadeInSegment 0.2s ease forwards 0.6s; }
.segment-8 { clip-path: inset(0 20% 0 70%); animation: fadeInSegment 0.2s ease forwards 0.7s; }
.segment-9 { clip-path: inset(0 10% 0 80%); animation: fadeInSegment 0.2s ease forwards 0.8s; }
.segment-10 { clip-path: inset(0 0 0 90%); animation: fadeInSegment 0.2s ease forwards 0.9s; }

.fade-scale-in {
  animation: fadeScaleIn 2s ease forwards;
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

:deep(.typed-cursor.typed-cursor--blink) {
  animation: none !important;
}
</style>
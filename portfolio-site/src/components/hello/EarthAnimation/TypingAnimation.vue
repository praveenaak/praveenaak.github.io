<template>
    <div class="typing-container">
      <span ref="typingElement"></span>
      <div v-if="showEarth" class="earth-container fade-scale-in">
        <Earth />
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
  
      onMounted(() => {
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
              }
            }
          });
        }
      });
  
      return {
        typingElement,
        showEarth
      };
    }
});
</script>
  
<style scoped>
.typing-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
    justify-content: flex-start;
    padding-left: 0; 
    padding-top: 2rem;
    width: 100%;
    margin: 0; 
    height: 200px;
}
  
.earth-container {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
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

:deep(.typed-cursor) {
    font-weight: 700;
    font-size: 2.5rem;
    opacity: 1;
    margin-left: 2px;
    animation: none !important; 
}
  
/* Override Typed.js default styles */
:deep(.typed-fade-out) {
    opacity: 1 !important;
}
  
:deep(.typed-cursor.typed-cursor--blink) {
    animation: none !important;
}
</style>
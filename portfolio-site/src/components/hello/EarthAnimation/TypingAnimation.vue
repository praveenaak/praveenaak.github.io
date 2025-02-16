//TypingAnimation.vue
<template>
  <div class="typing-container">
    <TitleBar :show="showTitleBar" :showEarth="earthInTitleBar" />
    <div class="text-earth-container">
      <div class="pixel-text" :class="{ 'fade-out': shouldFadeText }">
        <span ref="typingElement">{{ hasSeenAnimation ? 'hello' : '' }}</span>
      </div>
      <div 
        v-if="showEarth" 
        class="earth-container"
        :class="{
          'fade-scale-in': !earthInTitleBar,
          'move-to-title': earthInTitleBar
        }"
      >
        <Earth v-if="!earthInTitleBar" :small="false" />
      </div>
    </div>
    
    <AboutMe v-if="showAbout" />
    <River v-if="showRiver" />
    <ContactInfo v-if="showContact" :show="showContact" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Typed from 'typed.js';
import Earth from './Earth.vue';
import River from './River.vue';
import AboutMe from './AboutMe.vue';
import TitleBar from './TitleBar.vue';
import ContactInfo from './ContactInfo.vue';

export default defineComponent({
  name: 'TypingAnimation',
  components: {
    Earth,
    River,
    AboutMe,
    TitleBar,
    ContactInfo
  },
  setup() {
    const typingElement = ref<HTMLElement | null>(null);
    const showEarth = ref(false);
    const showAbout = ref(false);
    const showRiver = ref(false);
    const showTitleBar = ref(false);
    const showContact = ref(false);
    const shouldFadeText = ref(false);
    const earthInTitleBar = ref(false);
    const hasSeenAnimation = ref(localStorage.getItem('hasSeenAnimation') === 'true');

    const showAllElements = () => {
      showEarth.value = true;
      setTimeout(() => {
        showAbout.value = true;
        showRiver.value = true;
        showTitleBar.value = true;
        showContact.value = true;
        
        // Fade out the text after other elements appear
        setTimeout(() => {
          shouldFadeText.value = true;
          
          // Move Earth to title bar after text fades
          setTimeout(() => {
            earthInTitleBar.value = true;
          }, 500);
        }, 500);
      }, 1000);
    };

    onMounted(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
      document.head.appendChild(link);

      if (hasSeenAnimation.value) {
        // Skip animation if already seen
        showAllElements();
      } else {
        // Play animation for first time visitors
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
            onComplete: (self) => {
              const cursor = document.querySelector('.typed-cursor');
              if (cursor) {
                cursor.remove();
              }
            },
            onStringTyped: (arrayPos) => {
              if (arrayPos === 1) {
                showAllElements();
                localStorage.setItem('hasSeenAnimation', 'true');
              }
            }
          });
        }
      }
    });

    return {
      typingElement,
      showEarth,
      showAbout,
      showRiver,
      showTitleBar,
      showContact,
      shouldFadeText,
      earthInTitleBar,
      hasSeenAnimation
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
  height: 100vh;
  margin: 0;
  padding-top: 1rem;
  overflow: hidden;
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
  transition: opacity 0.5s ease-out;
  opacity: 1;
}

.pixel-text.fade-out {
  opacity: 0;
  pointer-events: none;
}

.earth-container {
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  opacity: 0;
  transition: all 0.8s ease;
}

.fade-scale-in {
  animation: fadeScaleIn 1s ease forwards;
}

.move-to-title {
  transform: translate(calc(100vw - 280px), -125%) scale(0.225);
  opacity: 0;
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
</style>
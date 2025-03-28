//TypingAnimation.vue
<template>
  <div class="typing-container">
    <TitleBar :show="showTitleBar" :showEarth="earthInTitleBar" />
    <div class="text-earth-container">
      <div class="pixel-text" :class="{ 'fade-out': shouldFadeText }">
        <span ref="typingElement">{{ hasSeenAnimation ? 'hello' : '' }}</span>
      </div>
    </div>

    <AboutMe v-if="showAbout" />
    <River v-if="showRiver" />
    <ContactInfo v-if="showContact" :show="showContact" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Typed from 'typed.js'
import Earth from './Earth.vue'
import River from './River.vue'
import AboutMe from './AboutMe.vue'
import TitleBar from './TitleBar.vue'
import ContactInfo from './ContactInfo.vue'

export default defineComponent({
  name: 'TypingAnimation',
  components: {
    Earth,
    River,
    AboutMe,
    TitleBar,
    ContactInfo,
  },
  setup() {
    const typingElement = ref<HTMLElement | null>(null)
    const showEarth = ref(false)
    const showAbout = ref(false)
    const showRiver = ref(false)
    const showTitleBar = ref(false)
    const showContact = ref(false)
    const shouldFadeText = ref(false)
    const earthInTitleBar = ref(false)
    const hasSeenAnimation = ref(localStorage.getItem('hasSeenAnimation') === 'true')

    const showAllElements = () => {
      showEarth.value = true
      
      setTimeout(() => {
        shouldFadeText.value = true
        
        setTimeout(() => {
          showAbout.value = true
          showRiver.value = true
          showTitleBar.value = true
          showContact.value = true
          
          setTimeout(() => {
            earthInTitleBar.value = true
          }, 300)
        }, 300)
      }, 200)
    }

    onMounted(() => {
      // Font is now imported in index.html

      if (hasSeenAnimation.value) {
        showAllElements()
      } else {
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
              const cursor = document.querySelector('.typed-cursor')
              if (cursor) {
                cursor.remove()
              }
            },
            onStringTyped: (arrayPos) => {
              if (arrayPos === 1) {
                showAllElements()
                localStorage.setItem('hasSeenAnimation', 'true')
              }
            },
          })
        }
      }
    })

    return {
      typingElement,
      showEarth,
      showAbout,
      showRiver,
      showTitleBar,
      showContact,
      shouldFadeText,
      earthInTitleBar,
      hasSeenAnimation,
    }
  },
})
</script>

<style scoped>
/* Font is now imported in index.html */

.typing-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding-top: 0.5rem;
  overflow: hidden;
}

@media (min-width: 768px) {
  .typing-container {
    padding-top: 1rem;
  }
}

.text-earth-container {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-top: 1rem;
  padding-top: 0.5rem;
  height: 150px;
}

@media (min-width: 768px) {
  .text-earth-container {
    font-size: 2rem;
    margin-left: 2rem;
    margin-top: 2rem;
    padding-top: 1rem;
    height: 200px;
  }
}

.pixel-text {
  font-family: var(--font-family);
  font-size: 1.5rem;
  color: var(--primary-color);
  transition: opacity 0.3s ease-out;
  opacity: 1;
  font-weight: 600;
}

@media (min-width: 768px) {
  .pixel-text {
    font-size: 2rem;
  }
}

.pixel-text.fade-out {
  opacity: 0;
  pointer-events: none;
}

/* Earth is now in AboutMe component */

.fade-scale-in {
  animation: fadeScaleIn 0.5s ease forwards;
}

.move-to-title {
  transform: translate(calc(100vw - 240px), -125%) scale(0.225);
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

@media (min-width: 768px) {
  .move-to-title {
    transform: translate(calc(100vw - 280px), -125%) scale(0.225);
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
  font-family: var(--font-family);
  font-size: 1.5rem;
  opacity: 1;
  margin-left: 2px;
  animation: none !important;
  color: var(--primary-color);
  font-weight: 600;
}

@media (min-width: 768px) {
  :deep(.typed-cursor) {
    font-size: 2rem;
  }
}

:deep(.typed-fade-out) {
  opacity: 1 !important;
}
</style>
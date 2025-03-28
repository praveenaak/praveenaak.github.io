<!-- HomeTypingAnimation.vue -->
<template>
  <div class="typing-container">
    <Header :show="showHeader" :showEarth="earthInHeader" />
    <div class="text-earth-container">
      <div class="pixel-text" :class="{ 'fade-text': shouldFadeText }">
        <span ref="typingElement">{{ hasSeenAnimation ? 'hello' : '' }}</span>
      </div>
      <!-- Earth replaces "world" text -->
      <div 
        v-if="showEarth" 
        class="earth-container" 
        :class="{
          'initial-position': !earthMoving,
          'move-to-about': earthMoving && !earthInHeader,
          'move-to-title': earthInHeader
        }"
      >
        <Earth v-if="!earthInHeader" :small="false" />
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
import Header from '@/components/layout/Header.vue'
import AboutMe from '@/components/home/AboutMe.vue'
import River from '@/components/animations/River.vue'
import ContactInfo from '@/components/home/ContactInfo.vue'

export default defineComponent({
  name: 'HomeTypingAnimation',
  components: {
    Header,
    AboutMe,
    River,
    ContactInfo,
  },
  setup() {
    const typingElement = ref<HTMLElement | null>(null)
    const showEarth = ref(false)
    const showAbout = ref(false)
    const showHeader = ref(false)
    const showContact = ref(false)
    const showRiver = ref(false)
    const shouldFadeText = ref(false)
    const earthMoving = ref(false)
    const earthInHeader = ref(false)
    const hasSeenAnimation = ref(false) // Force animation to run for testing

    const showAllElements = () => {
      if (hasSeenAnimation.value) {
        // Skip animation if user has seen it before
        showEarth.value = true
        showAbout.value = true
        showRiver.value = true
        showHeader.value = true
        showContact.value = true
        earthInHeader.value = true
      } else {
        // Show earth where "world" was
        showEarth.value = true
        
        // After a pause, start moving elements
        setTimeout(() => {
          earthMoving.value = true
          shouldFadeText.value = true
          
          // When earth starts to move, show content
          setTimeout(() => {
            showAbout.value = true
            showRiver.value = true
            showHeader.value = true
            showContact.value = true
            
            // Finally move earth to header
            setTimeout(() => {
              earthInHeader.value = true
            }, 600)
          }, 600)
        }, 600)
      }
    }

    onMounted(() => {
      if (hasSeenAnimation.value) {
        showAllElements()
      } else {
        if (typingElement.value) {
          // Listen for when backspacing reaches "hello "
          let backspaceReachedHello = false;
          
          const typed = new Typed(typingElement.value, {
            strings: ['hello world!', 'hello '],
            typeSpeed: 80,
            backSpeed: 50,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true,
            startDelay: 300,
            backDelay: 500,
            onComplete: (self) => {
              // When typing is complete, show Earth at position of "world"
              showEarth.value = true;
              
              // Then after 1 second, move Earth and show other elements
              setTimeout(() => {
                earthMoving.value = true;
                shouldFadeText.value = true;
                
                setTimeout(() => {
                  showAbout.value = true;
                  showRiver.value = true;
                  showHeader.value = true;
                  showContact.value = true;
                  
                  setTimeout(() => {
                    earthInHeader.value = true;
                  }, 600);
                }, 600);
                
                localStorage.setItem('hasSeenAnimation', 'true');
              }, 1000);
              
              // Hide cursor after typing is done
              const cursor = document.querySelector('.typed-cursor');
              if (cursor) {
                cursor.classList.add('hide-cursor');
              }
            }
          });
        }
      }
    })

    return {
      typingElement,
      showEarth,
      showAbout,
      showHeader,
      showRiver,
      showContact,
      shouldFadeText,
      earthMoving,
      earthInHeader,
      hasSeenAnimation,
    }
  },
})
</script>

<style scoped>
.typing-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding-top: var(--spacing-sm);
  overflow: hidden;
}

.text-earth-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: var(--spacing-md);
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-sm);
  height: 150px;
}

.pixel-text {
  font-size: 1.5rem;
  color: var(--primary-green);
  transition: opacity 0.3s ease-out;
  opacity: 1;
  font-weight: 700; /* Updated to Lora Bold */
  display: inline-block;
}

.pixel-text.fade-text {
  opacity: 0.5;
  pointer-events: none;
}

/* Earth container animations */
.earth-container {
  position: absolute;
  width: 40px;
  height: 40px;
  transition: all 0.8s ease-in-out;
  left: 5.9rem; /* Positioned where "world" would be */
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  z-index: 2;
}

.earth-container.initial-position {
  opacity: 1;
}

.earth-container.move-to-about {
  width: 150px;
  height: 150px;
  left: 60%;
  transform: translate(-50%, -50%);
  opacity: 1;
}

.earth-container.move-to-title {
  transform: translate(calc(100vw - 240px), -125%) scale(0.25);
  opacity: 0;
}

.hide-cursor {
  opacity: 0 !important;
}

@media (min-width: 768px) {
  .typing-container {
    padding-top: var(--spacing-md);
  }

  .text-earth-container {
    font-size: 2rem;
    margin-left: var(--spacing-xl);
    margin-top: var(--spacing-xl);
    padding-top: var(--spacing-md);
    height: 200px;
  }

  .pixel-text {
    font-size: 2rem;
  }
  
  .earth-container {
    width: 50px;
    height: 50px;
    left: 7.5rem; /* Adjusted for larger screen */
  }
  
  .earth-container.move-to-about {
    width: 200px;
    height: 200px;
    left: 70%;
  }
  
  .earth-container.move-to-title {
    transform: translate(calc(100vw - 280px), -125%) scale(0.225);
  }
}
</style>
<!-- HomeTypingAnimation.vue -->
<template>
  <div class="typing-container">
    <div class="text-earth-container">
      <div class="text-container">
        <span ref="typingElement">{{ hasSeenAnimation ? 'hello' : '' }}</span>
      </div>
      <!-- Earth appears after "world" is backspaced, positioned below text but in same row -->
      <div 
        v-if="showEarth" 
        class="earth-container" 
        :class="{ 
          'fade-in': showEarth,
          'roll-to-right': earthRolling
        }"
      >
        <Earth :small="false" />
      </div>
    </div>
    
    <!-- About Me section that appears after animation -->
    <div class="about-me-container" v-if="showAboutMe" :class="{ 'fade-in': showAboutMe }">
      <p class="about-text">
        I'm Praveenaa, a <span class="highlight-text">geospatial software developer</span> who finds narratives in complex spatial data.
      </p>
      <p class="about-text">
        I transform and analyze raw geographic data, building both intuitive map-based applications and efficient data pipelines that convert complex spatial information into practical tools.
        My passion lies in working with <em>climate data</em>, where I create tools that help us better understand and navigate our changing world.
      </p>
    </div>
    
    <!-- Right section where Earth will roll to -->
    <div class="right-section" v-if="showRightSection">
      <!-- Content for the right section -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Typed from 'typed.js'
import Earth from '@/components/animations/Earth.vue'

export default defineComponent({
  name: 'HomeTypingAnimation',
  components: {
    Earth
  },
  setup() {
    const typingElement = ref<HTMLElement | null>(null)
    const showEarth = ref(false)
    const earthRolling = ref(false)
    const showRightSection = ref(false)
    const showAboutMe = ref(false)
    const hasSeenAnimation = ref(localStorage.getItem('hasSeenAnimation') === 'true')

    // Function to trigger the rolling animation
    const startRollingAnimation = () => {
      // First show the right section
      showRightSection.value = true
      
      // After a shorter delay, start the rolling animation
      setTimeout(() => {
        earthRolling.value = true
        
        // Show about text shortly after the Earth starts moving
        // but before the animation completes
        setTimeout(() => {
          showAboutMe.value = true
          // Save that the user has seen the animation
          localStorage.setItem('hasSeenAnimation', 'true')
        }, 500) // Show about text 500ms after Earth starts rolling
      }, 300)
    }

    onMounted(() => {
      if (hasSeenAnimation.value) {
        // If animation was already seen, skip animation and show about text
        showEarth.value = true
        earthRolling.value = true
        showRightSection.value = true
        showAboutMe.value = true
      } else if (typingElement.value) {
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
            // Show Earth when typing completes (after backspacing "world")
            showEarth.value = true
            
            // Remove cursor completely after typing is done
            const cursor = document.querySelector('.typed-cursor')
            if (cursor) {
              cursor.remove()
            }
            
            // After Earth appears, start the rolling animation with shorter delay
            setTimeout(() => {
              startRollingAnimation()
            }, 500)
          }
        })
      }
    })

    return {
      typingElement,
      showEarth,
      earthRolling,
      showRightSection,
      showAboutMe,
      hasSeenAnimation
    }
  }
})
</script>

<style scoped>
.typing-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-top: 20vh; /* Positioned lower down */
  overflow: hidden;
}

.text-earth-container {
  position: relative;
  display: flex;
  align-items: center; /* Back to center alignment */
  margin-left: 6rem; /* Positioned more to the right */
}

.text-container {
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  color: #2E8B57; /* Misty Pine (Primary Green) */
  font-weight: 700;
}

/* Earth container animations */
.earth-container {
  position: absolute;
  left: 5.9rem; /* Positioned where "world" would be */
  top: 2.5rem; /* Positioned below the text but in same row */
  opacity: 0;
  transition: opacity 0.8s ease;
  transform-origin: center center;
}

.earth-container.fade-in {
  opacity: 1;
}

/* Rolling animation */
.earth-container.roll-to-right {
  animation: rollToRight 3s ease-in-out forwards;
}

@keyframes rollToRight {
  0% {
    transform: translateX(0) translateY(0) scale(1);
  }
  100% {
    transform: translateX(calc(60vw - 150px)) translateY(200px) scale(2.5);
  }
}

/* About Me section */
.about-me-container {
  max-width: 600px;
  margin-left: 6rem; /* Match the hello text positioning */
  margin-top: 1.5rem; /* Reduced space between hello and about text */
  opacity: 0;
  transition: opacity 1s ease;
  padding: 0;
}

.about-me-container.fade-in {
  opacity: 1;
}

.about-text {
  font-family: 'Lora', serif;
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--text-primary, #000000);
  text-align: left;
  font-weight: 500;
}

.highlight-text {
  font-style: italic;
  font-weight: 500;
  color: var(--text-primary, #000000);
  text-decoration: underline;
  text-decoration-color: var(--accent-purple, #BF00FF);
  text-decoration-thickness: 2px;
}

/* Right section styling */
.right-section {
  position: absolute;
  top: 20vh;
  left: 50%; /* Center it in the page */
  transform: translateX(-50%); /* Center it in the page */
  width: 300px;
  height: 300px;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Style for the typing cursor */
:deep(.typed-cursor) {
  font-size: 1.5rem;
  color: #2E8B57;
  opacity: 1;
}

.typed-fade-out {
  opacity: 0 !important;
  transition: opacity 0.25s;
}

@media (min-width: 768px) {
  .typing-container {
    padding-top: 25vh; /* Even lower on desktop */
  }
  
  .text-earth-container {
    margin-left: 10rem; /* More to the right on desktop */
  }
  
  .text-container {
    font-size: 2rem;
  }
  
  .earth-container {
    left: 4rem; /* Adjusted for larger font on desktop */
    top: -5rem; /* Slightly more space on desktop */
  }

  @keyframes rollToRight {
    0% {
      transform: translateX(0) translateY(0) scale(1);
    }
    100% {
      transform: translateX(calc(65vw - 200px)) translateY(250px) scale(3.5);
    }
  }
  
  .right-section {
    width: 400px;
    height: 400px;
    top: 25vh;
  }
  
  :deep(.typed-cursor) {
    font-size: 2rem;
  }
  
  .about-text {
    font-size: 1.6rem;
  }
  
  .about-me-container {
    margin-left: 10rem; /* Matches the hello text positioning on desktop */
    margin-top: 2rem; /* Slightly more space on desktop */
  }
}
</style>
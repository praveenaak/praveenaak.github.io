// TitleBar.vue
<template>
  <div class="title-bar" :class="{ 'fade-in': show }">
    <div class="name-container">
      <router-link to="/" class="name">PRAVEENAA KULANDHAIVEL</router-link>
      <div class="earth-container">
        <Earth :small="true" />
      </div>
    </div>
    
    <!-- Mobile menu button -->
    <button class="mobile-menu-button" aria-label="Toggle menu" @click="toggleMenu">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2"
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <line v-if="!menuOpen" x1="3" y1="12" x2="21" y2="12"></line>
        <line v-if="!menuOpen" x1="3" y1="6" x2="21" y2="6"></line>
        <line v-if="!menuOpen" x1="3" y1="18" x2="21" y2="18"></line>
        <line v-if="menuOpen" x1="18" y1="6" x2="6" y2="18"></line>
        <line v-if="menuOpen" x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    
    <!-- Desktop navigation -->
    <div class="nav-links desktop-nav">
      <router-link to="/resume" class="nav-link">RESUME</router-link>
      <router-link to="/projects" class="nav-link">PROJECTS</router-link>
    </div>
    
    <!-- Mobile navigation overlay -->
    <div class="mobile-nav" :class="{ 'open': menuOpen }">
      <div class="mobile-nav-links">
        <router-link to="/resume" class="mobile-nav-link" @click="closeMenu">RESUME</router-link>
        <router-link to="/projects" class="mobile-nav-link" @click="closeMenu">PROJECTS</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Earth from './Earth.vue'

export default defineComponent({
  name: 'TitleBar',
  components: {
    Earth,
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const menuOpen = ref(false);
    
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
      // Prevent scrolling when menu is open
      if (menuOpen.value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };
    
    const closeMenu = () => {
      menuOpen.value = false;
      document.body.style.overflow = '';
    };
    
    return {
      menuOpen,
      toggleMenu,
      closeMenu
    };
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.title-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #893168;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  opacity: 0;
  z-index: 1000;
}

.name-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.name {
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
  font-size: 1.2rem;
}

@media (min-width: 768px) {
  .title-bar {
    padding: 0 2rem;
  }
  
  .name {
    font-size: 1.5rem;
  }
}

.name:hover {
  opacity: 0.7;
}

.earth-container {
  width: 30px;
  height: 30px;
  margin-left: -5px;
}

/* Desktop navigation */
.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-link:hover {
  opacity: 0.7;
}

/* Mobile menu button */
.mobile-menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
}

/* Hide desktop nav on mobile */
.desktop-nav {
  display: none;
}

/* Mobile navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #893168;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}

.mobile-nav.open {
  transform: translateY(0);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mobile-nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover {
  opacity: 0.7;
}

/* Show desktop nav on larger screens */
@media (min-width: 768px) {
  .mobile-menu-button {
    display: none;
  }
  
  .desktop-nav {
    display: flex;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
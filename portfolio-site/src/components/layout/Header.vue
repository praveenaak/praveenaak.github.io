<!-- Header.vue -->
<template>
  <div class="title-bar" :class="{ 'fade-in': show }">
    <div class="name-container">
      <router-link to="/" class="name">PRAVEENAA KULANDHAIVEL</router-link>
      <div class="earth-container" v-if="showEarth">
        <Earth small />
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
import Earth from '@/components/animations/Earth.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Earth,
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    showEarth: {
      type: Boolean,
      default: false,
    }
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
/* Component styles now imported from main.css */
</style>
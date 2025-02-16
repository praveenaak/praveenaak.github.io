// TitleBar.vue
<template>
  <div class="title-bar" :class="{ 'fade-in': show }">
    <router-link to="/" class="name">PRAVEENAA KULANDHAIVEL</router-link>
    <div class="nav-links">
      <router-link to="/resume" class="nav-link">RESUME</router-link>
      <router-link to="/projects" class="nav-link">PROJECTS</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleBar',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
});
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
  padding: 0 2rem;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  z-index: 1000;
}

.name {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.9;
}

.name:hover {
  opacity: 1;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.9;
}

.nav-link:hover {
  opacity: 1;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
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
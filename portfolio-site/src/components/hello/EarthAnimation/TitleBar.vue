// TitleBar.vue
<template>
  <div class="title-bar" :class="{ 'fade-in': show }">
    <div class="name-container">
      <router-link to="/" class="name">PRAVEENAA KULANDHAIVEL</router-link>
      <div class="earth-container">
        <Earth :small="true" />
      </div>
    </div>
    <div class="nav-links">
      <router-link to="/resume" class="nav-link">RESUME</router-link>
      <router-link to="/projects" class="nav-link">PROJECTS</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Earth from './Earth.vue';

export default defineComponent({
  name: 'TitleBar',
  components: {
    Earth
  },
  props: {
    show: {
      type: Boolean,
      default: true
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
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  opacity: 0;
  z-index: 1000;
}

.name-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.name {
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.name:hover {
  opacity: 0.7;
}

.earth-container {
  width: 30px;
  height: 30px;
  margin-left: -5px;
}

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
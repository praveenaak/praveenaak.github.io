<template>
  <div class="about-section fade-in">
    <div class="about-content">
      <div class="about-left">
        <p class="about-text">
          Hello!
        </p>
        <p class="about-text">      
          I'm Praveenaa, a geospatial software developer driven by the stories hidden in complex spatial data.
          I specialize in transforming, analyzing, and visualizing geographic information to create map-driven applications.  
          I'm most passionate about working with climate data, developing tools that broaden our understanding of our changing planet.
        </p>
        <p class="about-text">
          If my work aligns with your interests or projects, I'd be happy to connect and explore potential collaborations!
        </p>
      </div>
      <div class="about-right">
        <div class="earth-container fade-scale-in">
          <Earth :small="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Earth from './Earth.vue'

export default defineComponent({
  name: 'AboutMe',
  components: {
    Earth
  }
})
</script>

<style scoped>
.about-section {
  margin: 0;
  padding: 0;
  opacity: 0;
  width: 100%;
}

.about-content {
  width: 100%;
  max-width: 1300px;
  margin: 0;
  display: flex;
  flex-direction: column;
  padding-left: 0;
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: 0;
  }
  
  .about-left {
    flex: 0 0 40%;
    max-width: 40%;
    padding-right: 2rem;
    margin-left: 0;
  }
  
  .about-right {
    flex: 0 0 60%;
    display: flex;
    justify-content: flex-start;
  }
}

.about-left {
  flex: 1;
  text-align: left;
  padding-left: 0;
  margin-left: 0;
}

.about-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .about-right {
    margin-top: 0;
  }
}

.earth-container {
  width: 200px;
  height: 200px;
}

@media (min-width: 768px) {
  .earth-container {
    width: 300px;
    height: 300px;
  }
}

.fade-scale-in {
  animation: fadeScaleIn 0.8s ease forwards;
}

@keyframes fadeScaleIn {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.about-title {
  font-family: var(--font-family);
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #000;
}

.about-text {
  font-family: var(--font-family);
  font-size: 0.5 rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  margin-left: 0;
  padding-left: 0;
  color: var(--neutral-gray);
}

@media (min-width: 768px) {
  .about-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .about-text {
    font-size: 1.5rem;
  }
}

.fade-in {
  animation: fadeIn 1s ease forwards;
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
<template>
  <div class="about-section fade-in">
    <div class="about-content">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutMe',
})
</script>

<style scoped>
.about-section {
  margin: 0rem 0;
  padding: 0 1rem;
  opacity: 0;
}

@media (min-width: 768px) {
  .about-section {
    padding: 0 2rem;
  }
}

.about-content {
  max-width: 1100px;
  margin: 0 auto;
}

.about-title {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #000;
}

.about-text {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  color: #000;
}

@media (min-width: 768px) {
  .about-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .about-text {
    font-size: 2rem;
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
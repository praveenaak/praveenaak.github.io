<!-- AboutMe.vue -->
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
import Earth from '@/components/animations/Earth.vue'

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
  padding: 0 var(--spacing-md);
  opacity: 0;
}

.about-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.about-left {
  flex: 1;
  text-align: left;
}

.about-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacing-lg);
}

.about-text {
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
  color: var(--neutral-gray);
  font-weight: 400; /* Ensure Lora Regular */
}

.about-text:first-child {
  color: var(--primary-green);
  font-weight: 700; /* Lora Bold for "Hello!" */
}

@media (min-width: 768px) {
  .about-section {
    padding: 0 var(--spacing-xl);
  }

  .about-content {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .about-right {
    margin-top: 0;
  }

  .about-text {
    font-size: 1.5rem;
  }
}
</style>
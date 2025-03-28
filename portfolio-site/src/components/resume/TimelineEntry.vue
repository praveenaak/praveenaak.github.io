<!-- TimelineEntry.vue -->
<template>
  <div class="timeline-entry">
    <div class="timeline-dot"></div>
    <div class="timeline-date">
      <span>{{ formattedDate }}</span>
    </div>
    <div class="timeline-content">
      <div class="job-header">
        <h3 class="job-title">{{ title }}</h3>
        <h4 class="company-name">{{ company }}</h4>
        <div class="job-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{{ location }}</span>
        </div>
      </div>
      
      <div class="job-description">
        <div 
          v-for="(item, index) in responsibilities" 
          :key="`resp-${index}`" 
          class="responsibility"
        >
          <span class="bullet">❯</span>
          <p>{{ item }}</p>
        </div>
      </div>
      
      <div class="tech-tags">
        <span 
          v-for="(tech, index) in technologies" 
          :key="`tech-${index}`" 
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TimelineEntry',
  props: {
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    responsibilities: {
      type: Array as () => string[],
      required: true
    },
    technologies: {
      type: Array as () => string[],
      required: true
    }
  },
  setup(props) {
    const formattedDate = computed(() => {
      return props.date.replace(' - ', '<br>-<br>').replace(' ', '<br>');
    });

    return {
      formattedDate
    };
  }
})
</script>

<style scoped>
/* Timeline entry styles are imported from the main styles */
</style>
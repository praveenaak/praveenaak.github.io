<!-- ProjectsView.vue -->
<template>
  <div class="projects-page">
    <Header :show="true" />
    <div class="content">
      <h1 class="page-title">PROJECTS</h1>
      <div class="wip-container">
        <p class="wip-text">Coming Soon...</p>
        <router-link to="/" class="back-link">GO BACK</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/layout/Header.vue'

export default defineComponent({
  name: 'ProjectsView',
  components: {
    Header
  }
})
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  background-color: var(--background-light);
}

.content {
  padding-top: 100px;
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
  justify-content: center;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-xl);
  color: var(--primary-green);
}

.wip-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xxl);
}

.wip-text {
  font-size: 2rem;
  text-align: center;
  color: var(--neutral-gray);
}

.back-link {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 2px solid var(--primary-green);
  border-radius: var(--border-radius-sm);
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--primary-green);
  transition: all var(--transition-fast);
}

.back-link:hover {
  background-color: var(--primary-green);
  color: var(--text-light);
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .page-title {
    font-size: 3rem;
  }
  
  .wip-text {
    font-size: 3rem;
  }
  
  .back-link {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .content {
    padding-top: 80px;
  }
  
  .wip-text {
    font-size: 2rem;
  }
}
</style>
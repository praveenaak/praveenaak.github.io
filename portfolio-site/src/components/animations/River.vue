<!-- River.vue -->
<template>
  <div class="river-container fade-in">
    <div class="river-image">
      <img src="/textures/CarsonREM-3.png" alt="River animation texture" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'River'
})
</script>

<style scoped>
.river-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: var(--spacing-xl) 0;
  opacity: 0;
}

.river-image {
  width: 100%;
  display: flex;
  justify-content: center;
}

.river-image img {
  max-width: 100%;
  height: auto;
  /* Add a subtle animation to make the texture appear to flow */
  animation: riverFlow 30s linear infinite;
}

@keyframes riverFlow {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
}

@media (min-width: 768px) {
  .river-container {
    margin: var(--spacing-xxl) 0;
  }
  
  .river-image img {
    max-width: 80%;
  }
}
</style>